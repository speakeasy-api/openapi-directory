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

type Customers struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCustomers(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Customers {
	return &Customers{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

func (s *Customers) DeleteConsumerV1CustomersSubscriptionsID(ctx context.Context, request operations.DeleteConsumerV1CustomersSubscriptionsIDRequest) (*operations.DeleteConsumerV1CustomersSubscriptionsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/customers/subscriptions/{id}", request.PathParams)

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

	res := &operations.DeleteConsumerV1CustomersSubscriptionsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

func (s *Customers) DeleteConsumerV1CustomersID(ctx context.Context, request operations.DeleteConsumerV1CustomersIDRequest) (*operations.DeleteConsumerV1CustomersIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/customers/{id}", request.PathParams)

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

	res := &operations.DeleteConsumerV1CustomersIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetConsumerV1Customers - Returns a list of customers.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *Customers) GetConsumerV1Customers(ctx context.Context, request operations.GetConsumerV1CustomersRequest) (*operations.GetConsumerV1CustomersResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/consumer/v1/customers"

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

	res := &operations.GetConsumerV1CustomersResponse{
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

			res.CustomerListViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1CustomersBookingfields - Returns a list of customer booking fields
// This end point returns Booking Field definitions.
//
// Customer booking fields are different than Appointment booking fields. Customer booking fields are
// stored with each customer. They are used when the information collected during the booking is specific
// to a particular visit.
//
// Use the field, and type to determine how to update field values
// in PUT /consumer/v1/appointments/{id}/book
//
// Customer Booking Fields include any custom customer fields you wish to capture with the Booking and also
// miscellaneous customer attributes including Company Name, Customer Demographic information and Address information.
func (s *Customers) GetConsumerV1CustomersBookingfields(ctx context.Context, request operations.GetConsumerV1CustomersBookingfieldsRequest) (*operations.GetConsumerV1CustomersBookingfieldsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/consumer/v1/customers/bookingfields"

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

	res := &operations.GetConsumerV1CustomersBookingfieldsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BookingFieldListViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BookingFieldListViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1CustomersCountries - Returns a list of country objects
// Returns a list of countries with the associated country code. Country codes are based on the 2 character ANSI standard.
func (s *Customers) GetConsumerV1CustomersCountries(ctx context.Context) (*operations.GetConsumerV1CustomersCountriesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/consumer/v1/customers/countries"

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

	res := &operations.GetConsumerV1CustomersCountriesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.CountryViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CountryViewModels = out
		}
	}

	return res, nil
}

// GetConsumerV1CustomersCustomfields - Returns a list of customField objects
// This end point returns your Customer custom field definitions.
//
// Customer custom fields are different than Appointment custom fields. Appointment custom fields are
// stored with each appointment. They are used when the information collected during the booking is specific
// to a particular visit, where as Customer custom fields are stored with the customer profile.
//
// Use the key field, and type to determine how to update field values
// in POST /consumer/v1/customers and PUT /consumer/v1/customers/{id}
func (s *Customers) GetConsumerV1CustomersCustomfields(ctx context.Context, request operations.GetConsumerV1CustomersCustomfieldsRequest) (*operations.GetConsumerV1CustomersCustomfieldsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/consumer/v1/customers/customfields"

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

	res := &operations.GetConsumerV1CustomersCustomfieldsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CustomFieldDefinitionListViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CustomFieldDefinitionListViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1CustomersPlans - Returns a list of customers.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *Customers) GetConsumerV1CustomersPlans(ctx context.Context, request operations.GetConsumerV1CustomersPlansRequest) (*operations.GetConsumerV1CustomersPlansResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/consumer/v1/customers/plans"

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

	res := &operations.GetConsumerV1CustomersPlansResponse{
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

			res.CustomerPlanListViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1CustomersPlansID - Returns a customer object.
// The result returned is a single customer object. An id is required to find the customer. Find customer id's using either the GET consumer/v1/customers end point,
// or the GET consumer/v1/appointments end point. A customer object is automatically created with the first booking if it doesn't already exist.
func (s *Customers) GetConsumerV1CustomersPlansID(ctx context.Context, request operations.GetConsumerV1CustomersPlansIDRequest) (*operations.GetConsumerV1CustomersPlansIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/customers/plans/{id}", request.PathParams)

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

	res := &operations.GetConsumerV1CustomersPlansIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CustomerPlanViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CustomerPlanViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1CustomersStates - Returns a list of state objects
// Returns a list of states with the associated state code and country.
//
// Contact us if states for your countries of operation are not currently loaded.
func (s *Customers) GetConsumerV1CustomersStates(ctx context.Context, request operations.GetConsumerV1CustomersStatesRequest) (*operations.GetConsumerV1CustomersStatesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/consumer/v1/customers/states"

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

	res := &operations.GetConsumerV1CustomersStatesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.StateViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.StateViewModels = out
		}
	}

	return res, nil
}

// GetConsumerV1CustomersSubscriptions - Returns a list of customer subscriptions.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *Customers) GetConsumerV1CustomersSubscriptions(ctx context.Context, request operations.GetConsumerV1CustomersSubscriptionsRequest) (*operations.GetConsumerV1CustomersSubscriptionsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/consumer/v1/customers/subscriptions"

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

	res := &operations.GetConsumerV1CustomersSubscriptionsResponse{
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

			res.CustomerSubscriptionListViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1CustomersSubscriptionsID - Returns a customer subscription object.
// The result returned is a single customer subscription object.
func (s *Customers) GetConsumerV1CustomersSubscriptionsID(ctx context.Context, request operations.GetConsumerV1CustomersSubscriptionsIDRequest) (*operations.GetConsumerV1CustomersSubscriptionsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/customers/subscriptions/{id}", request.PathParams)

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

	res := &operations.GetConsumerV1CustomersSubscriptionsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CustomerSubscriptionViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CustomerSubscriptionViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1CustomersID - Returns a customer object.
// The result returned is a single customer object. An id is required to find the customer. Find customer id's using either the GET consumer/v1/customers end point,
// or the GET consumer/v1/appointments end point. A customer object is automatically created with the first booking if it doesn't already exist.
func (s *Customers) GetConsumerV1CustomersID(ctx context.Context, request operations.GetConsumerV1CustomersIDRequest) (*operations.GetConsumerV1CustomersIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/customers/{id}", request.PathParams)

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

	res := &operations.GetConsumerV1CustomersIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CustomerViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CustomerViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1CustomersIDPlanlimitsServiceIDResourceIDDateTimeTz - Returns a list of customer booking limits.
// The result returned is list of limit rules as defined by the subscribed customer plan along with Booking Counts/Minutes
// The results indicate the remaining bookings count / minutes. Use the results in your app to determine if the customer should continue booking.
// You can enforce Limits in periods: Daily,Weekly,Monthly and for maximum total limits. Maximum total limits is based on six months prior to
// the DateTimeTz and six months after the DateTimeTz. Daily, Weekly and Monthly limits are based on the calculated period relative to the
// subscription plan start. Daily,Weekly and Monthly limits can be setup on a per interval basis e.g. to biweekly, or daily every 10 days.
// See customer plans setup in the Portal for more information.
// All parameters are required. If resourceId is not applicable for a non-resource calendar, pass zero.
// Format of the dateTimeTz field is 2018-10-30T10:00-5:00
func (s *Customers) GetConsumerV1CustomersIDPlanlimitsServiceIDResourceIDDateTimeTz(ctx context.Context, request operations.GetConsumerV1CustomersIDPlanlimitsServiceIDResourceIDDateTimeTzRequest) (*operations.GetConsumerV1CustomersIDPlanlimitsServiceIDResourceIDDateTimeTzResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/customers/{id}/planlimits/{serviceId}/{resourceId}/{dateTimeTz}", request.PathParams)

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

	res := &operations.GetConsumerV1CustomersIDPlanlimitsServiceIDResourceIDDateTimeTzResponse{
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

			res.PlanLimitListViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1CustomersIDSubscriptions - Returns a customer subscription object.
// The result returned is a single customer subscription object. A customer can only be subsribed to a single Customer Plan
func (s *Customers) GetConsumerV1CustomersIDSubscriptions(ctx context.Context, request operations.GetConsumerV1CustomersIDSubscriptionsRequest) (*operations.GetConsumerV1CustomersIDSubscriptionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/customers/{id}/subscriptions", request.PathParams)

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

	res := &operations.GetConsumerV1CustomersIDSubscriptionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CustomerSubscriptionViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CustomerSubscriptionViewModel = out
		}
	}

	return res, nil
}

// PostConsumerV1Customers - Creates a new customer object.
// Use this endpoint to create a new customer. If not specified the business location id defaults to the first location in the company.
// Email Address and a lastname are required for creating a new customer.
// Type 0 = Person, Type 1 = Business
// For type 0, the firstname and lastname fields are used. For type 1, the Name field is used and the name field is also used to populate the lastname.
func (s *Customers) PostConsumerV1Customers(ctx context.Context, request operations.PostConsumerV1CustomersRequest) (*operations.PostConsumerV1CustomersResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/consumer/v1/customers"

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

	res := &operations.PostConsumerV1CustomersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CustomerViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CustomerViewModel = out
		}
	}

	return res, nil
}

// PostConsumerV1CustomersIDSubscriptions - Creates a new customer subscription object.
// Use this endpoint to create a new customer subscription.
func (s *Customers) PostConsumerV1CustomersIDSubscriptions(ctx context.Context, request operations.PostConsumerV1CustomersIDSubscriptionsRequest) (*operations.PostConsumerV1CustomersIDSubscriptionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/customers/{id}/subscriptions", request.PathParams)

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

	res := &operations.PostConsumerV1CustomersIDSubscriptionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CustomerSubscriptionViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CustomerSubscriptionViewModel = out
		}
	}

	return res, nil
}

// PutConsumerV1CustomersSubscriptionsID - Updates a customer subscription object.
// Use this endpoint to update customer subscription information.
func (s *Customers) PutConsumerV1CustomersSubscriptionsID(ctx context.Context, request operations.PutConsumerV1CustomersSubscriptionsIDRequest) (*operations.PutConsumerV1CustomersSubscriptionsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/customers/subscriptions/{id}", request.PathParams)

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

	res := &operations.PutConsumerV1CustomersSubscriptionsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// PutConsumerV1CustomersID - Updates a customer object.
// Use this endpoint to update customer information. If not specified the business location id defaults to the first location in the company.
// Blank fields are not changed
func (s *Customers) PutConsumerV1CustomersID(ctx context.Context, request operations.PutConsumerV1CustomersIDRequest) (*operations.PutConsumerV1CustomersIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/customers/{id}", request.PathParams)

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

	res := &operations.PutConsumerV1CustomersIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
