package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
)

type Availability struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewAvailability(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Availability {
	return &Availability{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetConsumerV1AvailabilityServiceIDStartDateEndDate - Returns a list of available times.
// Choose your search criteria carefully. Availability is an expensive call. If you search availability for all resources
// then you should only do so for a single date. If you decide to search availability for multiple dates you should only do so
// for a specific resource by specifying the optional resourceId parameter.<br /><br />
//
// Start and End times are specified as military times e.g. 800 = 8:00am, 2230 = 10:30pm.
// You will only see availability within the boundary of your business start and end times.<br /><br />
//
// dayAvailability will return day availablility for the number of days requested from the start date.<br /><br />
//
// firstDayAvailable only works with day availability. If set to true it will look for the first day available within the range specified
// by the dayAvailability parameter. The two parameters together can be a clever way to display availability for a week or month.
// Tip - pass in the beginning of the week or month, and available times are displayed for the first available date if exists.<br /><br />
//
// You should only specify the duration parameter if you let your customers choose the duration of the appointment. e.g. from a list.<br /><br />
//
// The tz parameter allows you to select a suitable timezone for the customer to book in. Your app should be timezone aware if you
// use this option. The requested timezone is specified as an offset(plus or minus) from GMT time.<br /><br />
//
// Availabity can be complex. We provided an endpoint help you troubleshoot:
// /consumer/v1/availability/{serviceId}/{startDate}/{endDate}/unavailable.
// This endpoint will show you all the blocks for a given date range. Available times are created from any unblocked time periods.<br /><br />
//
// See more information at <a href="https://onsched.readme.io/docs/availability-overview">Availability Overview</a>
func (s *Availability) GetConsumerV1AvailabilityServiceIDStartDateEndDate(ctx context.Context, request operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateRequest) (*operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}", request.PathParams)

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

	res := &operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AvailabilityViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AvailabilityViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1AvailabilityServiceIDStartDateEndDateDays - Returns a list of available days.
// This end point is used to show day level availability. For example if the business is closed, or there is a public holiday.
//
// Day level availability is a good way to restrict your choices of dates in your app and improve usability.
func (s *Availability) GetConsumerV1AvailabilityServiceIDStartDateEndDateDays(ctx context.Context, request operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateDaysRequest) (*operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateDaysResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}/days", request.PathParams)

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

	res := &operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateDaysResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AvailabilityDayViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AvailabilityDayViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1AvailabilityServiceIDStartDateEndDateTimes - Returns a list of available times.
// <b>Deprecation Notice</b> : This endpoint is no longer being maintained and will be deprecated in a future release.
//
//	Use the /consumer/v1/availability{serviceId}/{startDate}/{endDate} endpoint instead.
func (s *Availability) GetConsumerV1AvailabilityServiceIDStartDateEndDateTimes(ctx context.Context, request operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateTimesRequest) (*operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateTimesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}/times", request.PathParams)

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

	res := &operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateTimesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Availability3ViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Availability3ViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailable - Returns a list of unavailable times.
// This endpoint is used to show unavailable times and provides information why the time is unavailable.
func (s *Availability) GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailable(ctx context.Context, request operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailableRequest) (*operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}/unavailable", request.PathParams)

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

	res := &operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailableResponse{
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

			res.UnavailableTimeListViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1AvailabilityServiceIDStartDateEndDateWindows - Returns a list of available booking window times.
// This end point may be removed in the next release. It is used for server based availability from UnavailableTimes.
// Use the v1/consumer/availability{serviceId}/{startDate}/{endDate} endpoint instead.
func (s *Availability) GetConsumerV1AvailabilityServiceIDStartDateEndDateWindows(ctx context.Context, request operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateWindowsRequest) (*operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateWindowsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}/windows", request.PathParams)

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

	res := &operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateWindowsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.WindowAvailabilityViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.WindowAvailabilityViewModel = out
		}
	}

	return res, nil
}
