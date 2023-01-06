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

// DeleteSetupV1ServicesAllocationsID - Delete a service allocation object
// Deletes a service allocation.
func (s *Services) DeleteSetupV1ServicesAllocationsID(ctx context.Context, request operations.DeleteSetupV1ServicesAllocationsIDRequest) (*operations.DeleteSetupV1ServicesAllocationsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/allocations/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
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

	res := &operations.DeleteSetupV1ServicesAllocationsIDResponse{
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

// DeleteSetupV1ServicesBlockID - Delete a service block object
// Deletes a service block.
func (s *Services) DeleteSetupV1ServicesBlockID(ctx context.Context, request operations.DeleteSetupV1ServicesBlockIDRequest) (*operations.DeleteSetupV1ServicesBlockIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/block/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
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

	res := &operations.DeleteSetupV1ServicesBlockIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceBlockViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceBlockViewModel = out
		}
	}

	return res, nil
}

// DeleteSetupV1ServicesBookingwindowsID - Permanently deletes bookingWindow object.
// Use this endpoint to permanently delete a bookingWindow.
func (s *Services) DeleteSetupV1ServicesBookingwindowsID(ctx context.Context, request operations.DeleteSetupV1ServicesBookingwindowsIDRequest) (*operations.DeleteSetupV1ServicesBookingwindowsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/bookingwindows/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
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

	res := &operations.DeleteSetupV1ServicesBookingwindowsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

func (s *Services) DeleteSetupV1ServicesCalendarID(ctx context.Context, request operations.DeleteSetupV1ServicesCalendarIDRequest) (*operations.DeleteSetupV1ServicesCalendarIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/calendar/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
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

	res := &operations.DeleteSetupV1ServicesCalendarIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ServiceCalendarViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceCalendarViewModel = out
		}
	}

	return res, nil
}

// DeleteSetupV1ServicesID - Deletes a service object.
// Use this endpoint to delete a service. The service is not permanently deleted and can be recovered.
func (s *Services) DeleteSetupV1ServicesID(ctx context.Context, request operations.DeleteSetupV1ServicesIDRequest) (*operations.DeleteSetupV1ServicesIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
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

	res := &operations.DeleteSetupV1ServicesIDResponse{
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

// DeleteSetupV1ServicesIDDeleteimage - Removes a service image
// Use this endpoint to delete a previously uploaded service image.
func (s *Services) DeleteSetupV1ServicesIDDeleteimage(ctx context.Context, request operations.DeleteSetupV1ServicesIDDeleteimageRequest) (*operations.DeleteSetupV1ServicesIDDeleteimageResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/{id}/deleteimage", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
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

	res := &operations.DeleteSetupV1ServicesIDDeleteimageResponse{
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

// GetSetupV1Services - Returns a list of services.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *Services) GetSetupV1Services(ctx context.Context, request operations.GetSetupV1ServicesRequest) (*operations.GetSetupV1ServicesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/services"

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

	res := &operations.GetSetupV1ServicesResponse{
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

// GetSetupV1ServicesAllocationsID - Get a service allocation
func (s *Services) GetSetupV1ServicesAllocationsID(ctx context.Context, request operations.GetSetupV1ServicesAllocationsIDRequest) (*operations.GetSetupV1ServicesAllocationsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/allocations/{id}", request.PathParams)

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

	res := &operations.GetSetupV1ServicesAllocationsIDResponse{
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

// GetSetupV1ServicesBlocksID - Get a service block
func (s *Services) GetSetupV1ServicesBlocksID(ctx context.Context, request operations.GetSetupV1ServicesBlocksIDRequest) (*operations.GetSetupV1ServicesBlocksIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/blocks/{id}", request.PathParams)

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

	res := &operations.GetSetupV1ServicesBlocksIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceBlockViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceBlockViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1ServicesBookingwindowsID - Get a booking window
func (s *Services) GetSetupV1ServicesBookingwindowsID(ctx context.Context, request operations.GetSetupV1ServicesBookingwindowsIDRequest) (*operations.GetSetupV1ServicesBookingwindowsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/bookingwindows/{id}", request.PathParams)

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

	res := &operations.GetSetupV1ServicesBookingwindowsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BookingWindowViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BookingWindowViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1ServicesID - Returns a service object.
// The result returned is a single service object. An id is required to find the service. Find service id's using either the GET consumer/v1/service end point,
// or the GET consumer/v1/appointments end point.
func (s *Services) GetSetupV1ServicesID(ctx context.Context, request operations.GetSetupV1ServicesIDRequest) (*operations.GetSetupV1ServicesIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/{id}", request.PathParams)

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

	res := &operations.GetSetupV1ServicesIDResponse{
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

// GetSetupV1ServicesIDAllocations - Returns a list of service allocations.
// This endpoint is used primarily for event booking. When you create service type events, you allocation specific occurrences of the event
// against the service.
//
// You can retrieve all allocations for a location by passing in zero as the service id. Otherwise, to get allocations for a specific service
// pass in the service id.
//
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *Services) GetSetupV1ServicesIDAllocations(ctx context.Context, request operations.GetSetupV1ServicesIDAllocationsRequest) (*operations.GetSetupV1ServicesIDAllocationsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/{id}/allocations", request.PathParams)

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

	res := &operations.GetSetupV1ServicesIDAllocationsResponse{
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

// GetSetupV1ServicesIDAvailability - Returns a list of weekly availability
// Use this endpoint to get weekly availability for a service.
func (s *Services) GetSetupV1ServicesIDAvailability(ctx context.Context, request operations.GetSetupV1ServicesIDAvailabilityRequest) (*operations.GetSetupV1ServicesIDAvailabilityResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/{id}/availability", request.PathParams)

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

	res := &operations.GetSetupV1ServicesIDAvailabilityResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ServiceAvailabilityViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceAvailabilityViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1ServicesIDBlocks - Returns a list of service blocks.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *Services) GetSetupV1ServicesIDBlocks(ctx context.Context, request operations.GetSetupV1ServicesIDBlocksRequest) (*operations.GetSetupV1ServicesIDBlocksResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/{id}/blocks", request.PathParams)

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

	res := &operations.GetSetupV1ServicesIDBlocksResponse{
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

			res.ServiceBlockListViewModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetSetupV1ServicesIDBookingwindows - Returns a list of service booking windows.
// This endpoint is used to retrieve any booking windows related to the service
//
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *Services) GetSetupV1ServicesIDBookingwindows(ctx context.Context, request operations.GetSetupV1ServicesIDBookingwindowsRequest) (*operations.GetSetupV1ServicesIDBookingwindowsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/{id}/bookingwindows", request.PathParams)

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

	res := &operations.GetSetupV1ServicesIDBookingwindowsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BookingWindowViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BookingWindowViewModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetSetupV1ServicesIDCalendar - Returns the linked calendar for the service
// Use this endpoint to get the linked calendar for the service.
// A service can only be linked to one calendar in a location.
func (s *Services) GetSetupV1ServicesIDCalendar(ctx context.Context, request operations.GetSetupV1ServicesIDCalendarRequest) (*operations.GetSetupV1ServicesIDCalendarResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/{id}/calendar", request.PathParams)

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

	res := &operations.GetSetupV1ServicesIDCalendarResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ServiceCalendarViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceCalendarViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1ServicesIDResources - Returns a list of resources for the specified service.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *Services) GetSetupV1ServicesIDResources(ctx context.Context, request operations.GetSetupV1ServicesIDResourcesRequest) (*operations.GetSetupV1ServicesIDResourcesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/{id}/resources", request.PathParams)

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

	res := &operations.GetSetupV1ServicesIDResourcesResponse{
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

// PostSetupV1Services - Creates a new service object.
// Use this endpoint to create a new service. If not specified the business location id defaults to the first location in the company.
// The service Type defaults to 1 if not entered.
// The service Type can be one of the following values:
// 1 = Appointment
// 2 = Event
// 3 = Meeting
func (s *Services) PostSetupV1Services(ctx context.Context, request operations.PostSetupV1ServicesRequest) (*operations.PostSetupV1ServicesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/services"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1ServicesResponse{
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

// PostSetupV1ServicesBookingwindows - Creates a new bookingWindow object.
// Use this endpoint to create a new bookingWindow.
func (s *Services) PostSetupV1ServicesBookingwindows(ctx context.Context, request operations.PostSetupV1ServicesBookingwindowsRequest) (*operations.PostSetupV1ServicesBookingwindowsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/services/bookingwindows"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1ServicesBookingwindowsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BookingWindowViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BookingWindowViewModel = out
		}
	}

	return res, nil
}

// PostSetupV1ServicesCalendar - Links the service to a calendar
// Use this endpoint to link a service to a calendar.
func (s *Services) PostSetupV1ServicesCalendar(ctx context.Context, request operations.PostSetupV1ServicesCalendarRequest) (*operations.PostSetupV1ServicesCalendarResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/services/calendar"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1ServicesCalendarResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ServiceCalendarViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceCalendarViewModel = out
		}
	}

	return res, nil
}

// PostSetupV1ServicesIDAllocations - Create a new service allocation
// Creates a new service allocation. You must specify a StartDate and EndDate.
// A reason for the allocation is also required. This reason will display in the OnSched Portal Calendar.
//
// Service allocations are used primarily for event type services. The allocation represents an occurrence of an allocation.
//
// Service allocations can be set to specific time ranges or for the whole day. Use the AllDay setting to create an all day block.
//
// Service allocations can be for a specific date range instance or set to repeat at a specified frequency.
// The frequency can be set to a value of D,W,M,Y for Day, Week, Month, or Year respecitively.
//
// Daily allocations will repeat for each day of the week for the date range specified.
//
// Weekly allocations will repeat only on the specified days of the week for the date range specified. For a weekly block
// you must also specify the weekdays. Weekdays are expressed as a string of digits with each single digit in the string representing a day
// of the week. The possible values are 0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wed, 4=Thursday, 5=Friday, 6=Saturday.
// For example a repeat weekly entry with weekdays 24 repeats each week on Tuesday and Thursday.
//
// Use the interval property to specify the interval that the allocation repeats. For example an interval of 2 for a weekly block means that
// the block will repeat every second week beginning at the day specified. A daily block with an interval of 10 means the block will
// repeat every 10 days. The interval property applies to all repeat frequencies.
//
// Monthly allocations repeat either on the day of the month specified in the month day property or on the day of the week and week of the month specified by
// the start date. For example, repeat every 3rd friday of each month, repeat on the 21st day of the month.
//
// Repeat allocations will end on the date specified by the end date. You can specify 9999-12-31 in the EndDate field to indicate the repeating block
// should continue indefinitely.
func (s *Services) PostSetupV1ServicesIDAllocations(ctx context.Context, request operations.PostSetupV1ServicesIDAllocationsRequest) (*operations.PostSetupV1ServicesIDAllocationsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/{id}/allocations", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1ServicesIDAllocationsResponse{
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

// PostSetupV1ServicesIDAllocationsBulk - Create new service allocations in bulk
// Creates new service allocations in bulk. Refer to documentation
// for creating a single Service Allocation POST /setup/v1/services/{id}/allocations
// for understanding how to populate the properties
//
// Use this endpoint only if you need to POST multiple allocations in one call
func (s *Services) PostSetupV1ServicesIDAllocationsBulk(ctx context.Context, request operations.PostSetupV1ServicesIDAllocationsBulkRequest) (*operations.PostSetupV1ServicesIDAllocationsBulkResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/{id}/allocations/bulk", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1ServicesIDAllocationsBulkResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.ServiceAllocationViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceAllocationViewModels = out
		}
	}

	return res, nil
}

// PostSetupV1ServicesIDBlock - Create a new service block
// Creates a new service block. You must specify a StartDateTime and EndDateTime.
// A reason for the block is also required. This reason will display in the OnSched Portal Calendar.
//
// Service blocks can be set to specific time ranges or for the whole day. Use the AllDay setting to create an all day block.
//
// Service blocks can be for a specific date range instance or set to repeat at a specified frequency.
// The frequency can be set to a value of D,W,M,Y for Day, Week, Month, or Year respecitively.
//
// Daily blocks will repeat for each day of the week for the date range specified.
//
// Weekly blocks will repeat only on the specified days of the week for the date range specified. For a weekly block
// you must also specify the weekdays. Weekdays are expressed as a string of digits with each single digit in the string representing a day
// of the week. The possible values are 0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wed, 4=Thursday, 5=Friday, 6=Saturday.
// For example a repeat weekly entry with weekdays 24 repeats each week on Tuesday and Thursday.
//
// Use the interval property to specify the interval that the block repeats. For example an interval of 2 for a weekly block means that
// the block will repeat every second week beginning at the day specified. A daily block with an interval of 10 means the block will
// repeat every 10 days. The interval property applies to all repeat frequencies.
//
// Monthly blocks repeat either on the day of the month specified in the month day property or on the day of the week and week of the month specified by
// the start date. For example, repeat every 3rd friday of each month, repeat on the 21st day of the month.
//
// Repeat blocks will end on the date specified by the end date. You can specify 9999-12-31 in
// the EndDate field to indicate the repeating block should continue indefinitely.
func (s *Services) PostSetupV1ServicesIDBlock(ctx context.Context, request operations.PostSetupV1ServicesIDBlockRequest) (*operations.PostSetupV1ServicesIDBlockResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/{id}/block", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1ServicesIDBlockResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ServiceBlockViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceBlockViewModel = out
		}
	}

	return res, nil
}

// PostSetupV1ServicesIDUploadimage - Uploads a service image
// Use this endpoint to upload a service image. You must convert the image to a base64 encoded string
// and pass that string as input along with your filename.
func (s *Services) PostSetupV1ServicesIDUploadimage(ctx context.Context, request operations.PostSetupV1ServicesIDUploadimageRequest) (*operations.PostSetupV1ServicesIDUploadimageResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/{id}/uploadimage", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1ServicesIDUploadimageResponse{
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

// PutSetupV1ServicesAllocationsID - Update a service allocation
// Updates a service allocation. Refer to the details in the POST service allocation for setting each of the required parameters.
func (s *Services) PutSetupV1ServicesAllocationsID(ctx context.Context, request operations.PutSetupV1ServicesAllocationsIDRequest) (*operations.PutSetupV1ServicesAllocationsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/allocations/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSetupV1ServicesAllocationsIDResponse{
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

// PutSetupV1ServicesBlockID - Update a service block
// Updates a resource block. Refer to the details in the POST resource block for setting each of the required parameters.
func (s *Services) PutSetupV1ServicesBlockID(ctx context.Context, request operations.PutSetupV1ServicesBlockIDRequest) (*operations.PutSetupV1ServicesBlockIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/block/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSetupV1ServicesBlockIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ServiceBlockViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceBlockViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1ServicesBookingwindowsID - Updates a bookingWindow object.
// Use this endpoint to update a booking window
func (s *Services) PutSetupV1ServicesBookingwindowsID(ctx context.Context, request operations.PutSetupV1ServicesBookingwindowsIDRequest) (*operations.PutSetupV1ServicesBookingwindowsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/bookingwindows/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSetupV1ServicesBookingwindowsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BookingWindowViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BookingWindowViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1ServicesID - Updates a service object.
// Use this endpoint to update a service.
func (s *Services) PutSetupV1ServicesID(ctx context.Context, request operations.PutSetupV1ServicesIDRequest) (*operations.PutSetupV1ServicesIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSetupV1ServicesIDResponse{
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

// PutSetupV1ServicesIDAvailability - Updates Weekly Availability
// Use this endpoint to update service availability. The Id parameter specifies the service
// for which you are updating availability. Availability day entries do not need to be created.
// The availbility day entries are created when a service object is created. They default to
// the business hours.
//
// Create an entry for each weekday you wish to update. Days are defined as sun,mon,tue,wed,thu,fri,sat.
// Start and End Times are entered in miltary format. e.g 2230 is 10:30pm.
//
// OnSched API provides support for 24 hour availability. For midnight start of day use 0. For midnight end of day use 2400.
//
// To set a day as unavailable, set both the StartTime and EndTime to 0. If you require times in between specified hours
// to be unavailable, use the resource blocks endpoints.
//
// Times entered represent the timezone of the business location.
func (s *Services) PutSetupV1ServicesIDAvailability(ctx context.Context, request operations.PutSetupV1ServicesIDAvailabilityRequest) (*operations.PutSetupV1ServicesIDAvailabilityResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/{id}/availability", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSetupV1ServicesIDAvailabilityResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ServiceAvailabilityViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceAvailabilityViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1ServicesIDRecover - Recovers a service object.
// Use this endpoint to recover a deleted service.
func (s *Services) PutSetupV1ServicesIDRecover(ctx context.Context, request operations.PutSetupV1ServicesIDRecoverRequest) (*operations.PutSetupV1ServicesIDRecoverResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/{id}/recover", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
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

	res := &operations.PutSetupV1ServicesIDRecoverResponse{
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
