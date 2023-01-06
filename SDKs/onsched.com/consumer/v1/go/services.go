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

type Services struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewServices(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Services {
	return &Services{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetConsumerV1Services - Returns a list of services.
// Use this endpoint to get services available at your business location and/or company. If no locationId is provided the primary company will be queried.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size.
// Default offset is <b>0</b>, and limit is <b>20</b>. Use the other query parameters to optionally filter the results list.
func (s *Services) GetConsumerV1Services(ctx context.Context, request operations.GetConsumerV1ServicesRequest) (*operations.GetConsumerV1ServicesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/consumer/v1/services"

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

	res := &operations.GetConsumerV1ServicesResponse{
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

			res.ServiceListViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1ServicesAllocationsID - Get a service allocation
func (s *Services) GetConsumerV1ServicesAllocationsID(ctx context.Context, request operations.GetConsumerV1ServicesAllocationsIDRequest) (*operations.GetConsumerV1ServicesAllocationsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/services/allocations/{id}", request.PathParams)

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

	res := &operations.GetConsumerV1ServicesAllocationsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ServiceAllocationViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceAllocationViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1ServicesID - Returns a service object.
// The result returned is a single service object. An id is required to find the service. Find service id's using either the GET consumer/v1/service end point,
// or the GET consumer/v1/appointments end point.
func (s *Services) GetConsumerV1ServicesID(ctx context.Context, request operations.GetConsumerV1ServicesIDRequest) (*operations.GetConsumerV1ServicesIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/services/{id}", request.PathParams)

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

	res := &operations.GetConsumerV1ServicesIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ServiceViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1ServicesIDAllocations - Returns a list of service allocations.
// This endpoint is used primarily for event booking. When you create service type events, you allocation specific occurrences of the event
// against the service.
//
// You can retrieve all allocations for a location by passing in zero as the service id. Otherwise, to get allocations for a specific service
// pass in the service id.
//
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *Services) GetConsumerV1ServicesIDAllocations(ctx context.Context, request operations.GetConsumerV1ServicesIDAllocationsRequest) (*operations.GetConsumerV1ServicesIDAllocationsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/services/{id}/allocations", request.PathParams)

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

	res := &operations.GetConsumerV1ServicesIDAllocationsResponse{
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

			res.ServiceAllocationListViewModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetConsumerV1ServicesIDResources - Returns a list of resources.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *Services) GetConsumerV1ServicesIDResources(ctx context.Context, request operations.GetConsumerV1ServicesIDResourcesRequest) (*operations.GetConsumerV1ServicesIDResourcesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/services/{id}/resources", request.PathParams)

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

	res := &operations.GetConsumerV1ServicesIDResourcesResponse{
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

			res.ResourceListViewModel = out
		}
	}

	return res, nil
}
