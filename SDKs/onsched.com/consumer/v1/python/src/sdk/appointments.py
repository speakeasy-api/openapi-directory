import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Appointments:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def delete_consumer_v1_appointments_id_(self, request: operations.DeleteConsumerV1AppointmentsIDRequest) -> operations.DeleteConsumerV1AppointmentsIDResponse:
        r"""Returns an appointment object
        This end point deletes a booking. Only appointments in a \"IN\" initial status can be deleted.
        Past dated appointments cannot be cancelled.<br /><br />
        
        A valid appointment id is required. You can use the appointmentId returned from GET /consumer/v1/appointments. <br /><br />
        For more information see <a href=\"https://onsched.readme.io/docs/appointments-overview\">Appointment Overview</a>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/appointments/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteConsumerV1AppointmentsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppointmentViewModel])
                res.appointment_view_model = out

        return res

    
    def get_consumer_v1_appointments(self, request: operations.GetConsumerV1AppointmentsRequest) -> operations.GetConsumerV1AppointmentsResponse:
        r"""Returns a list of appointments.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.<br /><br />
        Use the other query parameters to optionally filter the list by using the query parameters. <br /><br />
        This endpoint returns appoinments using paging. <br /><br />
        See more information at <a href=\"https://onsched.readme.io/docs/appointments-overview\">Appointments Overview</a>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/consumer/v1/appointments"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1AppointmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.appointment_list_view_model = out

        return res

    
    def get_consumer_v1_appointments_bookingfields(self, request: operations.GetConsumerV1AppointmentsBookingfieldsRequest) -> operations.GetConsumerV1AppointmentsBookingfieldsResponse:
        r"""Returns a list of appointment booking fields
        This end point returns Booking Field definitions.<br></br>
        
        Appointment booking fields are different than Customer booking fields. Appointment booking fields are
        stored with each appointment. They are used when the information collected during the booking is specific
        to a particular visit.<br></br>
        
        Use the field, and type to determine how to update field values
        in PUT /consumer/v1/appointments/bookingfields.<br></br>
        
        Booking Fields include any custom appointment fields you wish to capture with the Booking and also
        miscellaneous appointment attributes including address information.<br></br>
        For more information see <a href=\"https://onsched.readme.io/docs/custom-booking-fields\">Appointment booking fields</a>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/consumer/v1/appointments/bookingfields"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1AppointmentsBookingfieldsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BookingFieldListViewModel])
                res.booking_field_list_view_model = out

        return res

    
    def get_consumer_v1_appointments_customfields(self, request: operations.GetConsumerV1AppointmentsCustomfieldsRequest) -> operations.GetConsumerV1AppointmentsCustomfieldsResponse:
        r"""Returns a list of appointment custom field definitions
        This end point returns your Appointment custom field definitions.<br /><br />
        
        Appointment custom fields are different than Customer custom fields. Appointment custom fields are
        stored with each appointment. They are used when the information collected during the booking is specific
        to a particular visit.<br /><br />
        
        Use the field, and type to determine how to update field values
        in PUT /consumer/v1/appointments/customfields <br /><br />
        For more information see <a href=\"https://onsched.readme.io/docs/custom-booking-fields\">Appointment booking fields</a>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/consumer/v1/appointments/customfields"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1AppointmentsCustomfieldsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomFieldDefinitionListViewModel])
                res.custom_field_definition_list_view_model = out

        return res

    
    def get_consumer_v1_appointments_id_(self, request: operations.GetConsumerV1AppointmentsIDRequest) -> operations.GetConsumerV1AppointmentsIDResponse:
        r"""Returns an appointment object.
        The result returned is a single appointment object. A valid id is required to find the appointment. <br /><br />
        
        See more information at <a href=\"https://onsched.readme.io/docs/appointments-overview\">Appointments Overview</a>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/appointments/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1AppointmentsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppointmentViewModel])
                res.appointment_view_model = out

        return res

    
    def post_consumer_v1_appointments(self, request: operations.PostConsumerV1AppointmentsRequest) -> operations.PostConsumerV1AppointmentsResponse:
        r"""Returns an appointment object
        <p>This end point creates a new appointment in an Initial \"IN\" status. The exception is if completeBooking parameter set.</p>
        <br />
        <p>If you supply a valid customerId in the body, then the POST will create either a booking or reservation using the customer data.</p>
        <br />
        <p> A valid serviceId is required. Use GET consumer/v1/services to retrieve a list of your services.</p>
        <br />
        <p> A valid resourceId is required if your calendar is a resource based calendar and you are booking single resource appointments. </p>
        <br />
        <p> Use consumer/v1/resources to retrieve a list of your resources or use a resourceId returned from the /availability endpoints. </p>
        <br />
        <p> The resourceIds parameter is required for multi-resource appointments. Pass in comma separated valid resourceIds. This is beta until we update the notifications.</p>
        <br />
        <p> The customerIds parameter is required for multi-customer appointments. Pass in comma separated valid customerIds. This is beta until we update the notifications.</p>
        <br />
        <p> The locationId is optional. If the locationId is not passed, the system will default to the primary company location. </p>
        <br />
        <p> ServiceId provided must be valid for the location being searched. A valid serviceId is one that is scoped to 
                     Primary Company Location or is associated with that business LocationId</p>
        <br />
        <p> The customerId is optional. If supplied you can use the completeBooking option and skip the PUT /book step. </p>
        <br />
        <p> The completeBooking option provides a mechanism for immediate booking with a POST. Applies if you have enough customer information
                     to complete the booking. Either supply email and name or customerId with required information.
                     Normally, completeBooking is for the BK or RS status, however IN is included to support payment flows.</p>
        <br />
        <p> The email, name and phone fields are only used with the completeBooking option. As with customerId you can
                     skip the PUT /book step. This endpoint completes the booking, and sends notifications.</p>
        <br />
        <p> A bookingWindowId is required if you are booking appointments into a defined booking window on the service.</p>
        <br />
        <p> BookedBy is an optional parameter. If it is not supplied the email address of the booked appointment is used or the ip address if no email address is
                     used in the /appointment/book endpoint. Booked by is used in the Appointment Audit trail which can be viewed in the Admin Portal.</p>
        <br />
        <p> Location is optional. This is a string representing the location of the actual appointment, not to be confused with a Business Location.</p>
        <br />
        <p>Timezone name is optional. The Timezone name is in Iana format e.g. America/New_York. This is the timezone where the appointment was booked. Populating
                     this information can help later in situations where appointments are booked before a Daylight Savings change.</p>
        <br />
        <p>StartDateTime and EndDateTime are required. Use the ISO 8601 format for DateTime Timezone. e.g. 2016-10-30T09:00:00-5:00</p>
        <br />
        <p>TravelTimeMins and TravelAppointmentId are optional. These are important if you factor in Travel Time for resources to move between appointments.</p>
        <br />
        <p>This information is returned from the availability/times endpoint. <br /><br />
                     See more information at <a href=\"https://onsched.readme.io/docs/appointments-overview\">Appointments Overview</a></p>
        <br />
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/consumer/v1/appointments"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConsumerV1AppointmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppointmentInitialViewModel])
                res.appointment_initial_view_model = out

        return res

    
    def put_consumer_v1_appointments_id_book(self, request: operations.PutConsumerV1AppointmentsIDBookRequest) -> operations.PutConsumerV1AppointmentsIDBookResponse:
        r"""Returns an appointment object
        This end point completes a new booking. Only appointments in the \"IN\" initial status can be booked.
        by saving all the relevant details of the booking. <br /><br />
        
        A valid appointment id is required. Use the appointmentId returned from POST /consumer/v1/appointments.  <br /><br />
        
        To update appointment custom field values, use the GET /consumer/v1/appointments/customfields information.  <br /><br />
        to understand your definitions of custom fields and what key and values to update. <br /><br />
        See more information at <a href=\"https://onsched.readme.io/docs/appointments-overview\">Appointments Overview</a> and 
        <a href=\"https://onsched.readme.io/docs/custom-booking-fields\">Custom Booking Fields</a>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/appointments/{id}/book", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutConsumerV1AppointmentsIDBookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppointmentViewModel])
                res.appointment_view_model = out

        return res

    
    def put_consumer_v1_appointments_id_cancel(self, request: operations.PutConsumerV1AppointmentsIDCancelRequest) -> operations.PutConsumerV1AppointmentsIDCancelResponse:
        r"""Returns an appointment object
        This end point cancels a booking or reservation. Only appointments in a \"BK\" booked, or \"RS\" reserved status can be cancelled.
        Past dated appointments cannot be cancelled. <br /><br />
        
        A valid appointment id is required. Use the appointmentId returned from POST /consumer/v1/appointments. <br /><br />
        For more information see <a href=\"https://onsched.readme.io/docs/appointments-overview\">Appointment Overview</a>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/appointments/{id}/cancel", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutConsumerV1AppointmentsIDCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppointmentViewModel])
                res.appointment_view_model = out

        return res

    
    def put_consumer_v1_appointments_id_confirm(self, request: operations.PutConsumerV1AppointmentsIDConfirmRequest) -> operations.PutConsumerV1AppointmentsIDConfirmResponse:
        r"""Set the Appointment Confirm property to true or false
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/appointments/{id}/confirm", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PUT", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PutConsumerV1AppointmentsIDConfirmResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_consumer_v1_appointments_id_noshow(self, request: operations.PutConsumerV1AppointmentsIDNoshowRequest) -> operations.PutConsumerV1AppointmentsIDNoshowResponse:
        r"""For more information see <a href=\"https://onsched.readme.io/docs/appointments-overview\">Appointment Overview</a>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/appointments/{id}/noshow", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutConsumerV1AppointmentsIDNoshowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_consumer_v1_appointments_id_reschedule(self, request: operations.PutConsumerV1AppointmentsIDRescheduleRequest) -> operations.PutConsumerV1AppointmentsIDRescheduleResponse:
        r"""Returns an appointment object
        This end point reschedules a booking. Only appointments in a \"BK\" booked status can be rescheduled.
        Past dated appointments cannot be cancelled.<br /><br />
        
        A valid appointment id is required. Use the appointmentId returned from GET /consumer/v1/appointments.<br /><br />
        
        StartDateTime and EndDateTime are required. Use the ISO 8601 format for DateTime Timezone. e.g. 2016-10-30T09:00:00-5:00<br /><br />
        
        The serviceId is optional. If you want your users to change the service on a reschedule, include the new serviceId. 
        The new serviceId's StartDateTime and EndDateTime must match your service's duration.<br /><br />
        
        Use the GET /consumer/v1/availability/{id}/reschedule endpoint to display a list of available times
        for the end user to choose from to reschedule the original appointment.<br /><br />
        
        You cannot reschedule an appointment to a different location. You can cancel and reschedule to a different location.
        
        For more information see <a href=\"https://onsched.readme.io/docs/appointments-overview\">Appointment Overview</a>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/appointments/{id}/reschedule", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutConsumerV1AppointmentsIDRescheduleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppointmentViewModel])
                res.appointment_view_model = out

        return res

    
    def put_consumer_v1_appointments_id_reserve(self, request: operations.PutConsumerV1AppointmentsIDReserveRequest) -> operations.PutConsumerV1AppointmentsIDReserveResponse:
        r"""Returns an appointment object
        This end point completes a new reservation. Only appointments in the \"IN\" initial status can be booked.
        by saving all the relevant details of the booking.<br /><br />
        
        NOTE - appointment reservations are different than appointment bookings. Reservations are a two step booking process.
        An appointment is reserved but may not be completed as a booking until other business conditions have been met. For example
        an appointment may be reserved that is not yet assigned to a resource.<br /><br />
        
        NOTE 2 - this endpoint is new as of April 21, 2019. OnSched will be adding a new Email template for appointment reservations expected by the end of April.
        This will allow you to notify your customer of a reservation versus a booking and customize if required to indicate what conditions will the reservation
        become a booking.<br /><br />
        
        A valid appointment id is required. Use the appointmentId returned from POST /consumer/v1/appointments.<br /><br />
        
        To update appointment custom field values, use the GET /consumer/v1/appointments/customfields information.
        to understand your definitions of custom fields and what key and values to update. <br /><br />
        See more information at <a href=\"https://onsched.readme.io/docs/appointments-overview\">Appointments Overview</a><br /><br />
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/appointments/{id}/reserve", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PUT", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutConsumerV1AppointmentsIDReserveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    