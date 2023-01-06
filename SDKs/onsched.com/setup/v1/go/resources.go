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

type Resources struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewResources(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Resources {
	return &Resources{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DeleteSetupV1ResourcesAllocationsID - Delete a resource allocation object
// Deletes a resource allocation.
func (s *Resources) DeleteSetupV1ResourcesAllocationsID(ctx context.Context, request operations.DeleteSetupV1ResourcesAllocationsIDRequest) (*operations.DeleteSetupV1ResourcesAllocationsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/allocations/{id}", request.PathParams)

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

	res := &operations.DeleteSetupV1ResourcesAllocationsIDResponse{
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

// DeleteSetupV1ResourcesBlockID - Delete a resource block object
// Deletes a resource block.
func (s *Resources) DeleteSetupV1ResourcesBlockID(ctx context.Context, request operations.DeleteSetupV1ResourcesBlockIDRequest) (*operations.DeleteSetupV1ResourcesBlockIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/block/{id}", request.PathParams)

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

	res := &operations.DeleteSetupV1ResourcesBlockIDResponse{
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

// DeleteSetupV1ResourcesID - Deletes a resource object.
// Use this endpoint to delete a resource. The resource is not permanently deleted and can be recovered.
func (s *Resources) DeleteSetupV1ResourcesID(ctx context.Context, request operations.DeleteSetupV1ResourcesIDRequest) (*operations.DeleteSetupV1ResourcesIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/{id}", request.PathParams)

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

	res := &operations.DeleteSetupV1ResourcesIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceViewModel = out
		}
	}

	return res, nil
}

// DeleteSetupV1ResourcesIDDeleteimage - Removes a resource image
// Use this endpoint to delete a previously uploaded resource image.
func (s *Resources) DeleteSetupV1ResourcesIDDeleteimage(ctx context.Context, request operations.DeleteSetupV1ResourcesIDDeleteimageRequest) (*operations.DeleteSetupV1ResourcesIDDeleteimageResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/{id}/deleteimage", request.PathParams)

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

	res := &operations.DeleteSetupV1ResourcesIDDeleteimageResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceViewModel = out
		}
	}

	return res, nil
}

// DeleteSetupV1ResourcesIDServices - Deletes resource services from the specified resource
// Use this endpoint to delete all resource services for a resource
func (s *Resources) DeleteSetupV1ResourcesIDServices(ctx context.Context, request operations.DeleteSetupV1ResourcesIDServicesRequest) (*operations.DeleteSetupV1ResourcesIDServicesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/{id}/services", request.PathParams)

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

	res := &operations.DeleteSetupV1ResourcesIDServicesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1Resources - Returns a list of resources.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *Resources) GetSetupV1Resources(ctx context.Context, request operations.GetSetupV1ResourcesRequest) (*operations.GetSetupV1ResourcesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/resources"

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

	res := &operations.GetSetupV1ResourcesResponse{
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
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetSetupV1ResourcesAllocationsID - Update a resource allocation
func (s *Resources) GetSetupV1ResourcesAllocationsID(ctx context.Context, request operations.GetSetupV1ResourcesAllocationsIDRequest) (*operations.GetSetupV1ResourcesAllocationsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/allocations/{id}", request.PathParams)

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

	res := &operations.GetSetupV1ResourcesAllocationsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceAllocationViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceAllocationViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1ResourcesBlocksID - Update a resource block
func (s *Resources) GetSetupV1ResourcesBlocksID(ctx context.Context, request operations.GetSetupV1ResourcesBlocksIDRequest) (*operations.GetSetupV1ResourcesBlocksIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/blocks/{id}", request.PathParams)

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

	res := &operations.GetSetupV1ResourcesBlocksIDResponse{
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

func (s *Resources) GetSetupV1ResourcesTimezones(ctx context.Context) (*operations.GetSetupV1ResourcesTimezonesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/resources/timezones"

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

	res := &operations.GetSetupV1ResourcesTimezonesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SystemTimezoneViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SystemTimezoneViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1ResourcesID - Returns a resource object.
// The result returned is a single resource object. An id is required to find the resource. Find customer id's using either the GET consumer/v1/resources end point,
// or the GET consumer/v1/appointments end point.
func (s *Resources) GetSetupV1ResourcesID(ctx context.Context, request operations.GetSetupV1ResourcesIDRequest) (*operations.GetSetupV1ResourcesIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/{id}", request.PathParams)

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

	res := &operations.GetSetupV1ResourcesIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1ResourcesIDAllocations - Returns a list of resource allocations.
// Resource allocations allow you to specify explicitly the times you are available as opposed to
// generating resource availability from the times that are not unavailable.
//
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *Resources) GetSetupV1ResourcesIDAllocations(ctx context.Context, request operations.GetSetupV1ResourcesIDAllocationsRequest) (*operations.GetSetupV1ResourcesIDAllocationsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/{id}/allocations", request.PathParams)

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

	res := &operations.GetSetupV1ResourcesIDAllocationsResponse{
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

			res.ResourceAllocationListViewModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetSetupV1ResourcesIDAvailability - Returns a list of weekly availability
// Use this endpoint to get weekly availability for a resource. The displayed
// available times represent the resource timezone. The resource timezone can
// be set to any world timezone. By default it is set to the Business timezone.
func (s *Resources) GetSetupV1ResourcesIDAvailability(ctx context.Context, request operations.GetSetupV1ResourcesIDAvailabilityRequest) (*operations.GetSetupV1ResourcesIDAvailabilityResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/{id}/availability", request.PathParams)

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

	res := &operations.GetSetupV1ResourcesIDAvailabilityResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceAvailabilityViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceAvailabilityViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1ResourcesIDBlocks - Returns a list of resource blocks.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *Resources) GetSetupV1ResourcesIDBlocks(ctx context.Context, request operations.GetSetupV1ResourcesIDBlocksRequest) (*operations.GetSetupV1ResourcesIDBlocksResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/{id}/blocks", request.PathParams)

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

	res := &operations.GetSetupV1ResourcesIDBlocksResponse{
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

			res.ResourceBlockListViewModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddress - Returns a resource object.
// The result returned contains the google calendar authorization url
func (s *Resources) GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddress(ctx context.Context, request operations.GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddressRequest) (*operations.GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddressResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/{id}/calendar/auth/google/{googleEmailAddress}", request.PathParams)

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

	res := &operations.GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddressResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CalendarAuthViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CalendarAuthViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddress - Returns a resource object.
// The result returned contains the outlook calendar authorization url
func (s *Resources) GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddress(ctx context.Context, request operations.GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddressRequest) (*operations.GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddressResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/{id}/calendar/auth/outlook/{outlookEmailAddress}", request.PathParams)

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

	res := &operations.GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddressResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CalendarAuthViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CalendarAuthViewModel = out
		}
	}

	return res, nil
}

// PostSetupV1Resources - Creates a new resource object.
// Use this endpoint to create a new resource. If not specified, the business location id defaults to the first location in the company.<br /><br />
// Email Address and a Name are required for creating a new resource. <br /><br />
// Passing in a single or many serviceId(s) in the service array will result in those service(s) being associated with the resource,
// while passing in an empty array will result in all services being selected. This includes company and business scoped services. <br /><br />
func (s *Resources) PostSetupV1Resources(ctx context.Context, request operations.PostSetupV1ResourcesRequest) (*operations.PostSetupV1ResourcesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/resources"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1ResourcesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceViewModel = out
		}
	}

	return res, nil
}

// PostSetupV1ResourcesBulk - Creates new resource objects.
// Use this endpoint to create new resources. If not specified the business location id defaults to the first location in the company.<br /><br />
// Email Address and a Name are required for creating each new resource.<br /><br />
// Passing in a single or many serviceId(s) in the service array will result in those service(s) being associated with the resources,
// while passing in an empty array will result in all services being selected. This includes company and business scoped services.<br /><br />
func (s *Resources) PostSetupV1ResourcesBulk(ctx context.Context, request operations.PostSetupV1ResourcesBulkRequest) (*operations.PostSetupV1ResourcesBulkResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/resources/bulk"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1ResourcesBulkResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.ResourceViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceViewModels = out
		}
	}

	return res, nil
}

// PostSetupV1ResourcesIDAllocations - Create a new resource allocation
// Creates a new resource allocation. You must specify a StartDateTime and EndDateTime.
// A reason for the block is optional. This reason will display in the OnSched Portal Calendar.
//
// Resource allocations can be set to specific time ranges or for the whole day.
//
// Resource allocations can repeat for a specific date range instance or set to repeat at a specified frequency.
// The frequency can be set to a value of D,W,M,Y for Day, Week, Month, or Year respecitively.
//
// Daily allocations will repeat for each day of the week for the date range specified.
//
// Weekly allocations will repeat only on the specified days of the week for the date range specified. For a weekly block
// you must also specify the weekdays. Weekdays are expressed as a string of digits with each single digit in the string representing a day
// of the week. The possible values are 0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wed, 4=Thursday, 5=Friday, 6=Saturday.
// For example a repeat weekly entry with weekdays 24 repeats each week on Tuesday and Thursday.
//
// Use the interval property to specify the interval that the allocation repeats. For example an interval of 2 for a weekly allocation means that
// the allocation will repeat every second week beginning at the day specified. A daily allocation with an interval of 10 means the allocation will
// repeat every 10 days. The interval property applies to all repeat frequencies.
//
// Monthly allocations repeat either on the day of the month specified in the month day property or on the day of the week and week of the month specified by
// the start date. For example, repeat every 3rd friday of each month, repeat on the 21st day of the month.
//
// Repeat allocations will end on the date specified by the end date. You can specify 9999-12-31 in
// the EndDate field to indicate the repeating block should continue indefinitely.
func (s *Resources) PostSetupV1ResourcesIDAllocations(ctx context.Context, request operations.PostSetupV1ResourcesIDAllocationsRequest) (*operations.PostSetupV1ResourcesIDAllocationsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/{id}/allocations", request.PathParams)

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

	res := &operations.PostSetupV1ResourcesIDAllocationsResponse{
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

// PostSetupV1ResourcesIDBlock - Create a new resource block
// Creates a new resource block. You must specify a StartDateTime and EndDateTime.
// A reason for the block is also required. This reason will display in the OnSched Portal Calendar.
//
// Resource blocks can be set to specific time ranges or for the whole day. Use the AllDay setting to create an all day block.
//
// Resource blocks can be for a specific date range instance or set to repeat at a specified frequency.
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
func (s *Resources) PostSetupV1ResourcesIDBlock(ctx context.Context, request operations.PostSetupV1ResourcesIDBlockRequest) (*operations.PostSetupV1ResourcesIDBlockResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/{id}/block", request.PathParams)

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

	res := &operations.PostSetupV1ResourcesIDBlockResponse{
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

// PostSetupV1ResourcesIDServices - Adds resource services to the specified resource
// Use this endpoint to add resource services
func (s *Resources) PostSetupV1ResourcesIDServices(ctx context.Context, request operations.PostSetupV1ResourcesIDServicesRequest) (*operations.PostSetupV1ResourcesIDServicesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/{id}/services", request.PathParams)

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

	res := &operations.PostSetupV1ResourcesIDServicesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceViewModel = out
		}
	}

	return res, nil
}

// PostSetupV1ResourcesIDUploadimage - Uploads a resource image
// Use this endpoint to upload a resource image. You must convert the image to a base64 encoded string
// and pass that string as input along with your filename.
func (s *Resources) PostSetupV1ResourcesIDUploadimage(ctx context.Context, request operations.PostSetupV1ResourcesIDUploadimageRequest) (*operations.PostSetupV1ResourcesIDUploadimageResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/{id}/uploadimage", request.PathParams)

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

	res := &operations.PostSetupV1ResourcesIDUploadimageResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1ResourcesAllocationsID - Update a resource allocation
// Updates a resource allocation. Refer to the details in the POST resource allocation for setting each of the required parameters.
func (s *Resources) PutSetupV1ResourcesAllocationsID(ctx context.Context, request operations.PutSetupV1ResourcesAllocationsIDRequest) (*operations.PutSetupV1ResourcesAllocationsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/allocations/{id}", request.PathParams)

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

	res := &operations.PutSetupV1ResourcesAllocationsIDResponse{
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

// PutSetupV1ResourcesBlockID - Update a resource block
// Updates a resource block. Refer to the details in the POST resource block for setting each of the required parameters.
func (s *Resources) PutSetupV1ResourcesBlockID(ctx context.Context, request operations.PutSetupV1ResourcesBlockIDRequest) (*operations.PutSetupV1ResourcesBlockIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/block/{id}", request.PathParams)

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

	res := &operations.PutSetupV1ResourcesBlockIDResponse{
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

// PutSetupV1ResourcesBulk - Updates resource objects.
// Use this endpoint to update multiple resources.<br /><br />
// Passing in a single or many serviceId(s) in the service array will result in those service(s) being associated with the each resource,
// while passing in an empty array will result in all services being selected. This includes company and business scoped services.<br /><br />
func (s *Resources) PutSetupV1ResourcesBulk(ctx context.Context, request operations.PutSetupV1ResourcesBulkRequest) (*operations.PutSetupV1ResourcesBulkResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/resources/bulk"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSetupV1ResourcesBulkResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.ResourceViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceViewModels = out
		}
	}

	return res, nil
}

// PutSetupV1ResourcesID - Updates a resource object.
// Use this endpoint to update a resource. <br /><br />
// Passing in a single or many serviceId(s) in the service array will result in those service(s) being associated with the resource,
// while passing in an empty array will result in all services being selected. This includes company and business scoped services.<br /><br />
func (s *Resources) PutSetupV1ResourcesID(ctx context.Context, request operations.PutSetupV1ResourcesIDRequest) (*operations.PutSetupV1ResourcesIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSetupV1ResourcesIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1ResourcesIDAvailability - Updates Weekly Availability
// Use this endpoint to update resource availability. The Id parameter specifies the resource
// for which you are updating availability. Availability day entries do not need to be created.
// The availbility day entries are created when a resource object is created. They default to
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
// Times entered represent the
// timezone of the resource. Resources can belong to any world timezone.
func (s *Resources) PutSetupV1ResourcesIDAvailability(ctx context.Context, request operations.PutSetupV1ResourcesIDAvailabilityRequest) (*operations.PutSetupV1ResourcesIDAvailabilityResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/{id}/availability", request.PathParams)

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

	res := &operations.PutSetupV1ResourcesIDAvailabilityResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceAvailabilityViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceAvailabilityViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1ResourcesIDReassignAppointmentsResourceID - Reassigns appointments to another resource
// Use this endpoint to reassign appointments from one resource to another.
// If the startDate is not supplied, the default is today's date + 1 day;
// If the endDate is not supplied, all future appointments from the start date will be reassigned
// If the calendarId is not supplied the default is the primary calendar of the location.
func (s *Resources) PutSetupV1ResourcesIDReassignAppointmentsResourceID(ctx context.Context, request operations.PutSetupV1ResourcesIDReassignAppointmentsResourceIDRequest) (*operations.PutSetupV1ResourcesIDReassignAppointmentsResourceIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/{id}/reassign/appointments/{resourceId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
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

	res := &operations.PutSetupV1ResourcesIDReassignAppointmentsResourceIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.AppointmentViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AppointmentViewModels = out
		}
	}

	return res, nil
}

// PutSetupV1ResourcesIDRecover - Recovers a resource object.
// Use this endpoint to recover a deleted resource.
func (s *Resources) PutSetupV1ResourcesIDRecover(ctx context.Context, request operations.PutSetupV1ResourcesIDRecoverRequest) (*operations.PutSetupV1ResourcesIDRecoverResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/{id}/recover", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
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

	res := &operations.PutSetupV1ResourcesIDRecoverResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceViewModel = out
		}
	}

	return res, nil
}
