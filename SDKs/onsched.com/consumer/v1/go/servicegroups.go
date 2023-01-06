package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
	"strings"
)

type ServiceGroups struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewServiceGroups(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *ServiceGroups {
	return &ServiceGroups{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetConsumerV1Servicegroups - Returns a list of service groups.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *ServiceGroups) GetConsumerV1Servicegroups(ctx context.Context, request operations.GetConsumerV1ServicegroupsRequest) (*operations.GetConsumerV1ServicegroupsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/consumer/v1/servicegroups"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConsumerV1ServicegroupsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceGroupListViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1ServicegroupsID - Returns a serviceGroup object.
// The result returned is a single serviceGroup object. An id is required to find the serviceGroup. Find serviceGroup id's using
// the GET consumer/v1/servicegroups end point,
func (s *ServiceGroups) GetConsumerV1ServicegroupsID(ctx context.Context, request operations.GetConsumerV1ServicegroupsIDRequest) (*operations.GetConsumerV1ServicegroupsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/servicegroups/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConsumerV1ServicegroupsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ServiceGroupViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceGroupViewModel = out
		}
	}

	return res, nil
}
