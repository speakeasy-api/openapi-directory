package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Appointments {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Appointments(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteConsumerV1AppointmentsId - Returns an appointment object
     *
     * This end point deletes a booking. Only appointments in a "IN" initial status can be deleted.
     * Past dated appointments cannot be cancelled.<br /><br />
     * 
     * A valid appointment id is required. You can use the appointmentId returned from GET /consumer/v1/appointments. <br /><br />
     * For more information see <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a>
    **/
    public openapisdk.models.operations.DeleteConsumerV1AppointmentsIdResponse deleteConsumerV1AppointmentsId(openapisdk.models.operations.DeleteConsumerV1AppointmentsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/appointments/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteConsumerV1AppointmentsIdResponse res = new openapisdk.models.operations.DeleteConsumerV1AppointmentsIdResponse() {{
            appointmentViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AppointmentViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AppointmentViewModel.class);
                res.appointmentViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getConsumerV1Appointments - Returns a list of appointments.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.<br /><br />
     * Use the other query parameters to optionally filter the list by using the query parameters. <br /><br />
     * This endpoint returns appoinments using paging. <br /><br />
     * See more information at <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a>
    **/
    public openapisdk.models.operations.GetConsumerV1AppointmentsResponse getConsumerV1Appointments(openapisdk.models.operations.GetConsumerV1AppointmentsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/appointments");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetConsumerV1AppointmentsResponse res = new openapisdk.models.operations.GetConsumerV1AppointmentsResponse() {{
            appointmentListViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.appointmentListViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getConsumerV1AppointmentsBookingfields - Returns a list of appointment booking fields
     *
     * This end point returns Booking Field definitions.<br></br>
     * 
     * Appointment booking fields are different than Customer booking fields. Appointment booking fields are
     * stored with each appointment. They are used when the information collected during the booking is specific
     * to a particular visit.<br></br>
     * 
     * Use the field, and type to determine how to update field values
     * in PUT /consumer/v1/appointments/bookingfields.<br></br>
     * 
     * Booking Fields include any custom appointment fields you wish to capture with the Booking and also
     * miscellaneous appointment attributes including address information.<br></br>
     * For more information see <a href="https://onsched.readme.io/docs/custom-booking-fields">Appointment booking fields</a>
    **/
    public openapisdk.models.operations.GetConsumerV1AppointmentsBookingfieldsResponse getConsumerV1AppointmentsBookingfields(openapisdk.models.operations.GetConsumerV1AppointmentsBookingfieldsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/appointments/bookingfields");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetConsumerV1AppointmentsBookingfieldsResponse res = new openapisdk.models.operations.GetConsumerV1AppointmentsBookingfieldsResponse() {{
            bookingFieldListViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BookingFieldListViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BookingFieldListViewModel.class);
                res.bookingFieldListViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getConsumerV1AppointmentsCustomfields - Returns a list of appointment custom field definitions
     *
     * This end point returns your Appointment custom field definitions.<br /><br />
     * 
     * Appointment custom fields are different than Customer custom fields. Appointment custom fields are
     * stored with each appointment. They are used when the information collected during the booking is specific
     * to a particular visit.<br /><br />
     * 
     * Use the field, and type to determine how to update field values
     * in PUT /consumer/v1/appointments/customfields <br /><br />
     * For more information see <a href="https://onsched.readme.io/docs/custom-booking-fields">Appointment booking fields</a>
    **/
    public openapisdk.models.operations.GetConsumerV1AppointmentsCustomfieldsResponse getConsumerV1AppointmentsCustomfields(openapisdk.models.operations.GetConsumerV1AppointmentsCustomfieldsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/appointments/customfields");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetConsumerV1AppointmentsCustomfieldsResponse res = new openapisdk.models.operations.GetConsumerV1AppointmentsCustomfieldsResponse() {{
            customFieldDefinitionListViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CustomFieldDefinitionListViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CustomFieldDefinitionListViewModel.class);
                res.customFieldDefinitionListViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getConsumerV1AppointmentsId - Returns an appointment object.
     *
     * The result returned is a single appointment object. A valid id is required to find the appointment. <br /><br />
     * 
     * See more information at <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a>
    **/
    public openapisdk.models.operations.GetConsumerV1AppointmentsIdResponse getConsumerV1AppointmentsId(openapisdk.models.operations.GetConsumerV1AppointmentsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/appointments/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetConsumerV1AppointmentsIdResponse res = new openapisdk.models.operations.GetConsumerV1AppointmentsIdResponse() {{
            appointmentViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AppointmentViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AppointmentViewModel.class);
                res.appointmentViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * postConsumerV1Appointments - Returns an appointment object
     *
     * <p>This end point creates a new appointment in an Initial "IN" status. The exception is if completeBooking parameter set.</p>
     * <br />
     * <p>If you supply a valid customerId in the body, then the POST will create either a booking or reservation using the customer data.</p>
     * <br />
     * <p> A valid serviceId is required. Use GET consumer/v1/services to retrieve a list of your services.</p>
     * <br />
     * <p> A valid resourceId is required if your calendar is a resource based calendar and you are booking single resource appointments. </p>
     * <br />
     * <p> Use consumer/v1/resources to retrieve a list of your resources or use a resourceId returned from the /availability endpoints. </p>
     * <br />
     * <p> The resourceIds parameter is required for multi-resource appointments. Pass in comma separated valid resourceIds. This is beta until we update the notifications.</p>
     * <br />
     * <p> The customerIds parameter is required for multi-customer appointments. Pass in comma separated valid customerIds. This is beta until we update the notifications.</p>
     * <br />
     * <p> The locationId is optional. If the locationId is not passed, the system will default to the primary company location. </p>
     * <br />
     * <p> ServiceId provided must be valid for the location being searched. A valid serviceId is one that is scoped to 
     *              Primary Company Location or is associated with that business LocationId</p>
     * <br />
     * <p> The customerId is optional. If supplied you can use the completeBooking option and skip the PUT /book step. </p>
     * <br />
     * <p> The completeBooking option provides a mechanism for immediate booking with a POST. Applies if you have enough customer information
     *              to complete the booking. Either supply email and name or customerId with required information.
     *              Normally, completeBooking is for the BK or RS status, however IN is included to support payment flows.</p>
     * <br />
     * <p> The email, name and phone fields are only used with the completeBooking option. As with customerId you can
     *              skip the PUT /book step. This endpoint completes the booking, and sends notifications.</p>
     * <br />
     * <p> A bookingWindowId is required if you are booking appointments into a defined booking window on the service.</p>
     * <br />
     * <p> BookedBy is an optional parameter. If it is not supplied the email address of the booked appointment is used or the ip address if no email address is
     *              used in the /appointment/book endpoint. Booked by is used in the Appointment Audit trail which can be viewed in the Admin Portal.</p>
     * <br />
     * <p> Location is optional. This is a string representing the location of the actual appointment, not to be confused with a Business Location.</p>
     * <br />
     * <p>Timezone name is optional. The Timezone name is in Iana format e.g. America/New_York. This is the timezone where the appointment was booked. Populating
     *              this information can help later in situations where appointments are booked before a Daylight Savings change.</p>
     * <br />
     * <p>StartDateTime and EndDateTime are required. Use the ISO 8601 format for DateTime Timezone. e.g. 2016-10-30T09:00:00-5:00</p>
     * <br />
     * <p>TravelTimeMins and TravelAppointmentId are optional. These are important if you factor in Travel Time for resources to move between appointments.</p>
     * <br />
     * <p>This information is returned from the availability/times endpoint. <br /><br />
     *              See more information at <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>
     * <br />
    **/
    public openapisdk.models.operations.PostConsumerV1AppointmentsResponse postConsumerV1Appointments(openapisdk.models.operations.PostConsumerV1AppointmentsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/appointments");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostConsumerV1AppointmentsResponse res = new openapisdk.models.operations.PostConsumerV1AppointmentsResponse() {{
            appointmentInitialViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AppointmentInitialViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AppointmentInitialViewModel.class);
                res.appointmentInitialViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * putConsumerV1AppointmentsIdBook - Returns an appointment object
     *
     * This end point completes a new booking. Only appointments in the "IN" initial status can be booked.
     * by saving all the relevant details of the booking. <br /><br />
     * 
     * A valid appointment id is required. Use the appointmentId returned from POST /consumer/v1/appointments.  <br /><br />
     * 
     * To update appointment custom field values, use the GET /consumer/v1/appointments/customfields information.  <br /><br />
     * to understand your definitions of custom fields and what key and values to update. <br /><br />
     * See more information at <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a> and 
     * <a href="https://onsched.readme.io/docs/custom-booking-fields">Custom Booking Fields</a>
    **/
    public openapisdk.models.operations.PutConsumerV1AppointmentsIdBookResponse putConsumerV1AppointmentsIdBook(openapisdk.models.operations.PutConsumerV1AppointmentsIdBookRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/appointments/{id}/book", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutConsumerV1AppointmentsIdBookResponse res = new openapisdk.models.operations.PutConsumerV1AppointmentsIdBookResponse() {{
            appointmentViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AppointmentViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AppointmentViewModel.class);
                res.appointmentViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * putConsumerV1AppointmentsIdCancel - Returns an appointment object
     *
     * This end point cancels a booking or reservation. Only appointments in a "BK" booked, or "RS" reserved status can be cancelled.
     * Past dated appointments cannot be cancelled. <br /><br />
     * 
     * A valid appointment id is required. Use the appointmentId returned from POST /consumer/v1/appointments. <br /><br />
     * For more information see <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a>
    **/
    public openapisdk.models.operations.PutConsumerV1AppointmentsIdCancelResponse putConsumerV1AppointmentsIdCancel(openapisdk.models.operations.PutConsumerV1AppointmentsIdCancelRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/appointments/{id}/cancel", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutConsumerV1AppointmentsIdCancelResponse res = new openapisdk.models.operations.PutConsumerV1AppointmentsIdCancelResponse() {{
            appointmentViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AppointmentViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AppointmentViewModel.class);
                res.appointmentViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * putConsumerV1AppointmentsIdConfirm - Set the Appointment Confirm property to true or false
    **/
    public openapisdk.models.operations.PutConsumerV1AppointmentsIdConfirmResponse putConsumerV1AppointmentsIdConfirm(openapisdk.models.operations.PutConsumerV1AppointmentsIdConfirmRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/appointments/{id}/confirm", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutConsumerV1AppointmentsIdConfirmResponse res = new openapisdk.models.operations.PutConsumerV1AppointmentsIdConfirmResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * putConsumerV1AppointmentsIdNoshow - For more information see <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a>
    **/
    public openapisdk.models.operations.PutConsumerV1AppointmentsIdNoshowResponse putConsumerV1AppointmentsIdNoshow(openapisdk.models.operations.PutConsumerV1AppointmentsIdNoshowRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/appointments/{id}/noshow", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutConsumerV1AppointmentsIdNoshowResponse res = new openapisdk.models.operations.PutConsumerV1AppointmentsIdNoshowResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * putConsumerV1AppointmentsIdReschedule - Returns an appointment object
     *
     * This end point reschedules a booking. Only appointments in a "BK" booked status can be rescheduled.
     * Past dated appointments cannot be cancelled.<br /><br />
     * 
     * A valid appointment id is required. Use the appointmentId returned from GET /consumer/v1/appointments.<br /><br />
     * 
     * StartDateTime and EndDateTime are required. Use the ISO 8601 format for DateTime Timezone. e.g. 2016-10-30T09:00:00-5:00<br /><br />
     * 
     * The serviceId is optional. If you want your users to change the service on a reschedule, include the new serviceId. 
     * The new serviceId's StartDateTime and EndDateTime must match your service's duration.<br /><br />
     * 
     * Use the GET /consumer/v1/availability/{id}/reschedule endpoint to display a list of available times
     * for the end user to choose from to reschedule the original appointment.<br /><br />
     * 
     * You cannot reschedule an appointment to a different location. You can cancel and reschedule to a different location.
     * 
     * For more information see <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a>
    **/
    public openapisdk.models.operations.PutConsumerV1AppointmentsIdRescheduleResponse putConsumerV1AppointmentsIdReschedule(openapisdk.models.operations.PutConsumerV1AppointmentsIdRescheduleRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/appointments/{id}/reschedule", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutConsumerV1AppointmentsIdRescheduleResponse res = new openapisdk.models.operations.PutConsumerV1AppointmentsIdRescheduleResponse() {{
            appointmentViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AppointmentViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AppointmentViewModel.class);
                res.appointmentViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * putConsumerV1AppointmentsIdReserve - Returns an appointment object
     *
     * This end point completes a new reservation. Only appointments in the "IN" initial status can be booked.
     * by saving all the relevant details of the booking.<br /><br />
     * 
     * NOTE - appointment reservations are different than appointment bookings. Reservations are a two step booking process.
     * An appointment is reserved but may not be completed as a booking until other business conditions have been met. For example
     * an appointment may be reserved that is not yet assigned to a resource.<br /><br />
     * 
     * NOTE 2 - this endpoint is new as of April 21, 2019. OnSched will be adding a new Email template for appointment reservations expected by the end of April.
     * This will allow you to notify your customer of a reservation versus a booking and customize if required to indicate what conditions will the reservation
     * become a booking.<br /><br />
     * 
     * A valid appointment id is required. Use the appointmentId returned from POST /consumer/v1/appointments.<br /><br />
     * 
     * To update appointment custom field values, use the GET /consumer/v1/appointments/customfields information.
     * to understand your definitions of custom fields and what key and values to update. <br /><br />
     * See more information at <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a><br /><br />
    **/
    public openapisdk.models.operations.PutConsumerV1AppointmentsIdReserveResponse putConsumerV1AppointmentsIdReserve(openapisdk.models.operations.PutConsumerV1AppointmentsIdReserveRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/appointments/{id}/reserve", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutConsumerV1AppointmentsIdReserveResponse res = new openapisdk.models.operations.PutConsumerV1AppointmentsIdReserveResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
}