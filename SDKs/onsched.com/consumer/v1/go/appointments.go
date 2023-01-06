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

type Appointments struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewAppointments(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Appointments {
	return &Appointments{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DeleteConsumerV1AppointmentsID - Returns an appointment object
// This end point deletes a booking. Only appointments in a "IN" initial status can be deleted.
// Past dated appointments cannot be cancelled.<br /><br />
//
// A valid appointment id is required. You can use the appointmentId returned from GET /consumer/v1/appointments. <br /><br />
// For more information see <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a>
func (s *Appointments) DeleteConsumerV1AppointmentsID(ctx context.Context, request operations.DeleteConsumerV1AppointmentsIDRequest) (*operations.DeleteConsumerV1AppointmentsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/appointments/{id}", request.PathParams)

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

	res := &operations.DeleteConsumerV1AppointmentsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AppointmentViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AppointmentViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1Appointments - Returns a list of appointments.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.<br /><br />
// Use the other query parameters to optionally filter the list by using the query parameters. <br /><br />
// This endpoint returns appoinments using paging. <br /><br />
// See more information at <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a>
func (s *Appointments) GetConsumerV1Appointments(ctx context.Context, request operations.GetConsumerV1AppointmentsRequest) (*operations.GetConsumerV1AppointmentsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/consumer/v1/appointments"

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

	res := &operations.GetConsumerV1AppointmentsResponse{
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

			res.AppointmentListViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1AppointmentsBookingfields - Returns a list of appointment booking fields
// This end point returns Booking Field definitions.<br></br>
//
// Appointment booking fields are different than Customer booking fields. Appointment booking fields are
// stored with each appointment. They are used when the information collected during the booking is specific
// to a particular visit.<br></br>
//
// Use the field, and type to determine how to update field values
// in PUT /consumer/v1/appointments/bookingfields.<br></br>
//
// Booking Fields include any custom appointment fields you wish to capture with the Booking and also
// miscellaneous appointment attributes including address information.<br></br>
// For more information see <a href="https://onsched.readme.io/docs/custom-booking-fields">Appointment booking fields</a>
func (s *Appointments) GetConsumerV1AppointmentsBookingfields(ctx context.Context, request operations.GetConsumerV1AppointmentsBookingfieldsRequest) (*operations.GetConsumerV1AppointmentsBookingfieldsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/consumer/v1/appointments/bookingfields"

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

	res := &operations.GetConsumerV1AppointmentsBookingfieldsResponse{
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

// GetConsumerV1AppointmentsCustomfields - Returns a list of appointment custom field definitions
// This end point returns your Appointment custom field definitions.<br /><br />
//
// Appointment custom fields are different than Customer custom fields. Appointment custom fields are
// stored with each appointment. They are used when the information collected during the booking is specific
// to a particular visit.<br /><br />
//
// Use the field, and type to determine how to update field values
// in PUT /consumer/v1/appointments/customfields <br /><br />
// For more information see <a href="https://onsched.readme.io/docs/custom-booking-fields">Appointment booking fields</a>
func (s *Appointments) GetConsumerV1AppointmentsCustomfields(ctx context.Context, request operations.GetConsumerV1AppointmentsCustomfieldsRequest) (*operations.GetConsumerV1AppointmentsCustomfieldsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/consumer/v1/appointments/customfields"

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

	res := &operations.GetConsumerV1AppointmentsCustomfieldsResponse{
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

// GetConsumerV1AppointmentsID - Returns an appointment object.
// The result returned is a single appointment object. A valid id is required to find the appointment. <br /><br />
//
// See more information at <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a>
func (s *Appointments) GetConsumerV1AppointmentsID(ctx context.Context, request operations.GetConsumerV1AppointmentsIDRequest) (*operations.GetConsumerV1AppointmentsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/appointments/{id}", request.PathParams)

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

	res := &operations.GetConsumerV1AppointmentsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AppointmentViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AppointmentViewModel = out
		}
	}

	return res, nil
}

// PostConsumerV1Appointments - Returns an appointment object
// <p>This end point creates a new appointment in an Initial "IN" status. The exception is if completeBooking parameter set.</p>
// <br />
// <p>If you supply a valid customerId in the body, then the POST will create either a booking or reservation using the customer data.</p>
// <br />
// <p> A valid serviceId is required. Use GET consumer/v1/services to retrieve a list of your services.</p>
// <br />
// <p> A valid resourceId is required if your calendar is a resource based calendar and you are booking single resource appointments. </p>
// <br />
// <p> Use consumer/v1/resources to retrieve a list of your resources or use a resourceId returned from the /availability endpoints. </p>
// <br />
// <p> The resourceIds parameter is required for multi-resource appointments. Pass in comma separated valid resourceIds. This is beta until we update the notifications.</p>
// <br />
// <p> The customerIds parameter is required for multi-customer appointments. Pass in comma separated valid customerIds. This is beta until we update the notifications.</p>
// <br />
// <p> The locationId is optional. If the locationId is not passed, the system will default to the primary company location. </p>
// <br />
// <p> ServiceId provided must be valid for the location being searched. A valid serviceId is one that is scoped to
//
//	Primary Company Location or is associated with that business LocationId</p>
//
// <br />
// <p> The customerId is optional. If supplied you can use the completeBooking option and skip the PUT /book step. </p>
// <br />
// <p> The completeBooking option provides a mechanism for immediate booking with a POST. Applies if you have enough customer information
//
//	to complete the booking. Either supply email and name or customerId with required information.
//	Normally, completeBooking is for the BK or RS status, however IN is included to support payment flows.</p>
//
// <br />
// <p> The email, name and phone fields are only used with the completeBooking option. As with customerId you can
//
//	skip the PUT /book step. This endpoint completes the booking, and sends notifications.</p>
//
// <br />
// <p> A bookingWindowId is required if you are booking appointments into a defined booking window on the service.</p>
// <br />
// <p> BookedBy is an optional parameter. If it is not supplied the email address of the booked appointment is used or the ip address if no email address is
//
//	used in the /appointment/book endpoint. Booked by is used in the Appointment Audit trail which can be viewed in the Admin Portal.</p>
//
// <br />
// <p> Location is optional. This is a string representing the location of the actual appointment, not to be confused with a Business Location.</p>
// <br />
// <p>Timezone name is optional. The Timezone name is in Iana format e.g. America/New_York. This is the timezone where the appointment was booked. Populating
//
//	this information can help later in situations where appointments are booked before a Daylight Savings change.</p>
//
// <br />
// <p>StartDateTime and EndDateTime are required. Use the ISO 8601 format for DateTime Timezone. e.g. 2016-10-30T09:00:00-5:00</p>
// <br />
// <p>TravelTimeMins and TravelAppointmentId are optional. These are important if you factor in Travel Time for resources to move between appointments.</p>
// <br />
// <p>This information is returned from the availability/times endpoint. <br /><br />
//
//	See more information at <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>
//
// <br />
func (s *Appointments) PostConsumerV1Appointments(ctx context.Context, request operations.PostConsumerV1AppointmentsRequest) (*operations.PostConsumerV1AppointmentsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/consumer/v1/appointments"

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

	res := &operations.PostConsumerV1AppointmentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AppointmentInitialViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AppointmentInitialViewModel = out
		}
	}

	return res, nil
}

// PutConsumerV1AppointmentsIDBook - Returns an appointment object
// This end point completes a new booking. Only appointments in the "IN" initial status can be booked.
// by saving all the relevant details of the booking. <br /><br />
//
// A valid appointment id is required. Use the appointmentId returned from POST /consumer/v1/appointments.  <br /><br />
//
// To update appointment custom field values, use the GET /consumer/v1/appointments/customfields information.  <br /><br />
// to understand your definitions of custom fields and what key and values to update. <br /><br />
// See more information at <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a> and
// <a href="https://onsched.readme.io/docs/custom-booking-fields">Custom Booking Fields</a>
func (s *Appointments) PutConsumerV1AppointmentsIDBook(ctx context.Context, request operations.PutConsumerV1AppointmentsIDBookRequest) (*operations.PutConsumerV1AppointmentsIDBookResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/appointments/{id}/book", request.PathParams)

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

	res := &operations.PutConsumerV1AppointmentsIDBookResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AppointmentViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AppointmentViewModel = out
		}
	}

	return res, nil
}

// PutConsumerV1AppointmentsIDCancel - Returns an appointment object
// This end point cancels a booking or reservation. Only appointments in a "BK" booked, or "RS" reserved status can be cancelled.
// Past dated appointments cannot be cancelled. <br /><br />
//
// A valid appointment id is required. Use the appointmentId returned from POST /consumer/v1/appointments. <br /><br />
// For more information see <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a>
func (s *Appointments) PutConsumerV1AppointmentsIDCancel(ctx context.Context, request operations.PutConsumerV1AppointmentsIDCancelRequest) (*operations.PutConsumerV1AppointmentsIDCancelResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/appointments/{id}/cancel", request.PathParams)

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

	res := &operations.PutConsumerV1AppointmentsIDCancelResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AppointmentViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AppointmentViewModel = out
		}
	}

	return res, nil
}

// PutConsumerV1AppointmentsIDConfirm - Set the Appointment Confirm property to true or false
func (s *Appointments) PutConsumerV1AppointmentsIDConfirm(ctx context.Context, request operations.PutConsumerV1AppointmentsIDConfirmRequest) (*operations.PutConsumerV1AppointmentsIDConfirmResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/appointments/{id}/confirm", request.PathParams)

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

	res := &operations.PutConsumerV1AppointmentsIDConfirmResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// PutConsumerV1AppointmentsIDNoshow - For more information see <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a>
func (s *Appointments) PutConsumerV1AppointmentsIDNoshow(ctx context.Context, request operations.PutConsumerV1AppointmentsIDNoshowRequest) (*operations.PutConsumerV1AppointmentsIDNoshowResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/appointments/{id}/noshow", request.PathParams)

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

	res := &operations.PutConsumerV1AppointmentsIDNoshowResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// PutConsumerV1AppointmentsIDReschedule - Returns an appointment object
// This end point reschedules a booking. Only appointments in a "BK" booked status can be rescheduled.
// Past dated appointments cannot be cancelled.<br /><br />
//
// A valid appointment id is required. Use the appointmentId returned from GET /consumer/v1/appointments.<br /><br />
//
// StartDateTime and EndDateTime are required. Use the ISO 8601 format for DateTime Timezone. e.g. 2016-10-30T09:00:00-5:00<br /><br />
//
// The serviceId is optional. If you want your users to change the service on a reschedule, include the new serviceId.
// The new serviceId's StartDateTime and EndDateTime must match your service's duration.<br /><br />
//
// Use the GET /consumer/v1/availability/{id}/reschedule endpoint to display a list of available times
// for the end user to choose from to reschedule the original appointment.<br /><br />
//
// You cannot reschedule an appointment to a different location. You can cancel and reschedule to a different location.
//
// For more information see <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a>
func (s *Appointments) PutConsumerV1AppointmentsIDReschedule(ctx context.Context, request operations.PutConsumerV1AppointmentsIDRescheduleRequest) (*operations.PutConsumerV1AppointmentsIDRescheduleResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/appointments/{id}/reschedule", request.PathParams)

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

	res := &operations.PutConsumerV1AppointmentsIDRescheduleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AppointmentViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AppointmentViewModel = out
		}
	}

	return res, nil
}

// PutConsumerV1AppointmentsIDReserve - Returns an appointment object
// This end point completes a new reservation. Only appointments in the "IN" initial status can be booked.
// by saving all the relevant details of the booking.<br /><br />
//
// NOTE - appointment reservations are different than appointment bookings. Reservations are a two step booking process.
// An appointment is reserved but may not be completed as a booking until other business conditions have been met. For example
// an appointment may be reserved that is not yet assigned to a resource.<br /><br />
//
// NOTE 2 - this endpoint is new as of April 21, 2019. OnSched will be adding a new Email template for appointment reservations expected by the end of April.
// This will allow you to notify your customer of a reservation versus a booking and customize if required to indicate what conditions will the reservation
// become a booking.<br /><br />
//
// A valid appointment id is required. Use the appointmentId returned from POST /consumer/v1/appointments.<br /><br />
//
// To update appointment custom field values, use the GET /consumer/v1/appointments/customfields information.
// to understand your definitions of custom fields and what key and values to update. <br /><br />
// See more information at <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a><br /><br />
func (s *Appointments) PutConsumerV1AppointmentsIDReserve(ctx context.Context, request operations.PutConsumerV1AppointmentsIDReserveRequest) (*operations.PutConsumerV1AppointmentsIDReserveResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/appointments/{id}/reserve", request.PathParams)

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

	res := &operations.PutConsumerV1AppointmentsIDReserveResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
