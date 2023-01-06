package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
)

type Library struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewLibrary(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Library {
	return &Library{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetLibrary - Retrieves the entire library
// Will return the entire library for the authenticated user. If size of the library exceeds server preferences (normally 500) or the value of the optional limit parameter, the result will be paginated. Paginated responses return a Link header, indicating the next URI to fetch. The resulting header value will look something like:
//
// <https://products.izettle.com/organizations/self/library?limit=X&offset=Y>; rel="next"
//
// where limit is number of items in response, and offset is the current position in pagination. The rel-part in the header is the links relation to the data previously recieved. The idea is that as long as this header is present there are still items remaining to be fetched. When either the header is not present or it's value doesn't contain any "next" value, all items have been sent to the client.
//
// Note: The client should NOT try to extract query parameters from the URI, but rather use it as-is for the next request. Also, clients should be perpared that one Link header might contain multiple other IRIs that are not "next" (there will never be more than one "next" though). See more at:
//
//	IETF: https://tools.ietf.org/html/rfc5988
//	GitHub: https://developer.github.com/guides/traversing-with-pagination/
//
// If eventLogUuid is provided, the response will only include events affecting the library since that event. Such responses are normally quite small and would be a preferred method for most fat clients after retrieving the initial full library.
func (s *Library) GetLibrary(ctx context.Context, request operations.GetLibraryRequest) (*operations.GetLibraryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/organizations/{organizationUuid}/library", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetLibraryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LibraryResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LibraryResponse = out
		}
	case httpRes.StatusCode == 412:
	}

	return res, nil
}
