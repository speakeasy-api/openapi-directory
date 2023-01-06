package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
	"strings"
)

type Institutions struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewInstitutions(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Institutions {
	return &Institutions{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// InstitutionsDetail - Retrieve an institution
// Retrieves the details of an institution
// #### Returns
// Returns a JSON object with a `data` key containing the representation of the requested institution, if the request was successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *Institutions) InstitutionsDetail(ctx context.Context, request operations.InstitutionsDetailRequest) (*operations.InstitutionsDetailResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/institutions/{institution_id}/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.InstitutionsDetailResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// InstitutionsList - List all institutions
//
// A paginated list of all verified institutions.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of 10 institutions. Each resource in the array is a separate institution object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
//
// This request should never return an error.
// #### Filtering
// You can optionally request that the response only include institutions that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/?filter[id]=cos.
//
// Institutions may be filtered by their `id`, `name`, and `auth_url`
func (s *Institutions) InstitutionsList(ctx context.Context) (*operations.InstitutionsListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/institutions/"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.InstitutionsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// InstitutionsNodeList - List all affiliated nodes
// A paginated list of all nodes affiliated with an institution.
// #### Versioning
// As of version `2.2`, affiliated components (in addition to affiliated top-level projects) are returned from this endpoint.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of 10 nodes. Each resource in the array is a separate nodes object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
// #### Filtering
// You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/cos/nodes?filter[title]=science.
//
// Nodes may be filtered by their `id`, `title`, `description`, `public`, `tags`, `category`, `date_created`, `date_modified`, `root`, `parent`, `contributors`, and `preprint`
func (s *Institutions) InstitutionsNodeList(ctx context.Context, request operations.InstitutionsNodeListRequest) (*operations.InstitutionsNodeListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/institutions/{institution_id}/nodes/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.InstitutionsNodeListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// InstitutionsRegistrationList - List all affiliated registrations
// A paginated list of all registrations affiliated with an institution.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of 10 registrations. Each resource in the array is a separate users object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
// #### Filtering
// You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/cos/registrations?filter[title]=science.
//
// Registrations may be filtered by their  `id`, `title`, `description`, `public`, `tags`, `category`, `date_created`, `date_modified`, `root`, `parent`, `contributors`, and `preprint`
func (s *Institutions) InstitutionsRegistrationList(ctx context.Context, request operations.InstitutionsRegistrationListRequest) (*operations.InstitutionsRegistrationListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/institutions/{institution_id}/registrations/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.InstitutionsRegistrationListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// InstitutionsUsersList - List all affiliated users
// A paginated list of all users affiliated with an institution.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of 10 users. Each resource in the array is a separate users object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
// #### Filtering
// You can optionally request that the response only include users that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/cos/users?filter[family_name]=Nosek.
//
// Users may be filtered by their `id`, `full_name`, `given_name`, `middle_names`, and `family_name`
func (s *Institutions) InstitutionsUsersList(ctx context.Context, request operations.InstitutionsUsersListRequest) (*operations.InstitutionsUsersListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/institutions/{institution_id}/users/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.InstitutionsUsersListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}
