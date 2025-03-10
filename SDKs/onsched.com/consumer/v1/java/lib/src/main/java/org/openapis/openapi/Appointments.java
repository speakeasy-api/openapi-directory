/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;
import org.openapis.openapi.utils.HTTPClient;
import org.openapis.openapi.utils.HTTPRequest;
import org.openapis.openapi.utils.JSON;
import org.openapis.openapi.utils.SerializedBody;

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
     * Delete Appointment
     * &lt;p&gt;Use this endpoint to permanently &lt;b&gt;Delete&lt;/b&gt; an appointment. Only appointments with a of "IN" status, initial, can be deleted. Past dated appointments cannot be deleted. A valid &lt;b&gt;appointment id&lt;/b&gt; is required. Use the appointment id returned from the initial &lt;i&gt;POST /consumer/v1/appointments&lt;/i&gt; endpoint.&lt;/p&gt;
     * &lt;p&gt;For more information: &lt;a href="https://onsched.readme.io/docs/appointments-overview"&gt;Appointment Overview&lt;/a&gt;&lt;/p&gt;
     * @param request the request object containing all of the parameters for the API call
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.DeleteConsumerV1AppointmentsIdResponse deleteConsumerV1AppointmentsId(org.openapis.openapi.models.operations.DeleteConsumerV1AppointmentsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.DeleteConsumerV1AppointmentsIdRequest.class, baseUrl, "/consumer/v1/appointments/{id}", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.DeleteConsumerV1AppointmentsIdResponse res = new org.openapis.openapi.models.operations.DeleteConsumerV1AppointmentsIdResponse(contentType, httpRes.statusCode()) {{
            appointmentViewModel = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.AppointmentViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.AppointmentViewModel.class);
                res.appointmentViewModel = out;
            }
        }

        return res;
    }

    /**
     * Get Appointments
     * &lt;p&gt;Use this endpoint to return a &lt;b&gt;List of Appointments&lt;/b&gt;. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further. For more information: &lt;a href="https://onsched.readme.io/docs/appointments-overview"&gt;Appointments Overview&lt;/a&gt;&lt;/p&gt;
     * @param request the request object containing all of the parameters for the API call
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.GetConsumerV1AppointmentsResponse getConsumerV1Appointments(org.openapis.openapi.models.operations.GetConsumerV1AppointmentsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(baseUrl, "/consumer/v1/appointments");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.GetConsumerV1AppointmentsRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.GetConsumerV1AppointmentsResponse res = new org.openapis.openapi.models.operations.GetConsumerV1AppointmentsResponse(contentType, httpRes.statusCode()) {{
            appointmentListViewModel = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.AppointmentListViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.AppointmentListViewModel.class);
                res.appointmentListViewModel = out;
            }
        }

        return res;
    }

    /**
     * Get Custom Fields Labels
     * &lt;p&gt;Use this endpoint to return a locations &lt;b&gt;Appointment Booking Fields&lt;/b&gt;. Appointment booking fields are stored with each Appointment record. They are used when you need additional information collected during your booking process. It is tied to an appointment/visit and will be stored in the appointment record. Use the field name, type, and length to determine how to update these field values when posting an appointment.&lt;/p&gt;
     * @param request the request object containing all of the parameters for the API call
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.GetConsumerV1AppointmentsBookingfieldsResponse getConsumerV1AppointmentsBookingfields(org.openapis.openapi.models.operations.GetConsumerV1AppointmentsBookingfieldsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(baseUrl, "/consumer/v1/appointments/bookingfields");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.GetConsumerV1AppointmentsBookingfieldsRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.GetConsumerV1AppointmentsBookingfieldsResponse res = new org.openapis.openapi.models.operations.GetConsumerV1AppointmentsBookingfieldsResponse(contentType, httpRes.statusCode()) {{
            bookingFieldListViewModel = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.BookingFieldListViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.BookingFieldListViewModel.class);
                res.bookingFieldListViewModel = out;
            }
        }

        return res;
    }

    /**
     * Get Custom Fields List
     * &lt;p&gt;Use this endpoint to return a locations &lt;b&gt;Appointment Custom Field&lt;/b&gt; definitions. Appointment custom fields are stored with each appointment. They are used when the information collected during the booking is specific to a particular appointment/visit. The response will list the custom fields used (customField1 - 10), the field type (string, number, date, boolean) and the length of each one.&lt;/p&gt;
     * @param request the request object containing all of the parameters for the API call
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.GetConsumerV1AppointmentsCustomfieldsResponse getConsumerV1AppointmentsCustomfields(org.openapis.openapi.models.operations.GetConsumerV1AppointmentsCustomfieldsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(baseUrl, "/consumer/v1/appointments/customfields");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.GetConsumerV1AppointmentsCustomfieldsRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.GetConsumerV1AppointmentsCustomfieldsResponse res = new org.openapis.openapi.models.operations.GetConsumerV1AppointmentsCustomfieldsResponse(contentType, httpRes.statusCode()) {{
            customFieldDefinitionListViewModel = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.CustomFieldDefinitionListViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.CustomFieldDefinitionListViewModel.class);
                res.customFieldDefinitionListViewModel = out;
            }
        }

        return res;
    }

    /**
     * Get Appointment
     * &lt;p&gt;Use this endpoint to return an &lt;b&gt;Appointment&lt;/b&gt; object. A valid &lt;b&gt;appointment id&lt;/b&gt; is required. For more information: &lt;a href="https://onsched.readme.io/docs/appointments-overview"&gt;Appointments Overview&lt;/a&gt;&lt;/p&gt;
     * @param request the request object containing all of the parameters for the API call
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.GetConsumerV1AppointmentsIdResponse getConsumerV1AppointmentsId(org.openapis.openapi.models.operations.GetConsumerV1AppointmentsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.GetConsumerV1AppointmentsIdRequest.class, baseUrl, "/consumer/v1/appointments/{id}", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.GetConsumerV1AppointmentsIdResponse res = new org.openapis.openapi.models.operations.GetConsumerV1AppointmentsIdResponse(contentType, httpRes.statusCode()) {{
            appointmentViewModel = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.AppointmentViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.AppointmentViewModel.class);
                res.appointmentViewModel = out;
            }
        }

        return res;
    }

    /**
     * Create Appointment
     * &lt;p&gt;Use this endpoint to &lt;b&gt;Create&lt;/b&gt; a new appointment. The appointment will be created with an "IN", Initial status. Posting an appointment with "IN" status requires minimal information and requires a "PUT book" call to complete the booking transaction, &lt;i&gt;PUT \u200b/consumer\u200b/v1\u200b/appointments\u200b/{id}\u200b/book&lt;/i&gt;. Alternatively, you can post an appointment using the &lt;b&gt;completeBooking&lt;/b&gt; option which completes the booking in one transaction, but it will require more data. The method you choose depends on your solutions workflow. &lt;/p&gt;
     * &lt;p&gt;
     *   &lt;b&gt;StartDateTime&lt;/b&gt; and &lt;b&gt;EndDateTime&lt;/b&gt; are required. Use the ISO 8601 format for DateTime Timezone, e.g., &lt;b&gt;2016-10-30T09:00:00-5:00&lt;/b&gt;&lt;/p&gt;
     * &lt;p&gt;A valid &lt;b&gt;serviceId&lt;/b&gt; is required. The serviceId provided must be valid for the location being booked. A valid serviceId is one that is scoped to a Primary Company Location or is associated with a Business Location&lt;/p&gt;
     * &lt;p&gt;OPTIONAL FIELDS INCLUDE: &lt;/p&gt;
     * &lt;p&gt;
     *   &lt;b&gt;locationId&lt;/b&gt; - if not supplied, the appointment will be posted to the primary business location. If you support multiple location, we recommend always supplying the locationId. &lt;/p&gt;
     * &lt;p&gt;
     *   &lt;b&gt;resourceId&lt;/b&gt; - not required when posting with an "IN" status but is required when the appointment is booked. Use &lt;i&gt;GET /consumer/v1/resources&lt;/i&gt; for a list of resources. &lt;/p&gt;
     * &lt;p&gt;
     *   &lt;b&gt;customerId&lt;/b&gt; - if supplied the name and email will be retrieved from the customer record. &lt;/p&gt;
     * &lt;p&gt;
     *   &lt;b&gt;BookedBy&lt;/b&gt; - if not supplied the email address of the booked appointment is used or the ip address if no email address is provided. BookedBy is used in the Appointment Audit trail which can be viewed in the appointment object.&lt;/p&gt;
     * &lt;p&gt;
     *   &lt;b&gt;Location&lt;/b&gt; - is a string value representing the location of the appointment. It provides no added functionality in OnSched and should not be confused with locationId.&lt;/p&gt;
     * &lt;p&gt;
     *   &lt;b&gt;TimezoneName&lt;/b&gt; - if used timezoneName must be in IANA format, &lt;i&gt;America/New_York&lt;/i&gt;. This is the timezone the appointment was booked in. Populating this information can help later in situations where appointments are booked before a Daylight Savings change. If no timezoneName is supplied, the Business Locations timezone will be used.&lt;/p&gt;
     * &lt;p&gt;
     *   &lt;b&gt;COMPLETE BOOKING:&lt;/b&gt; This parameter provides a mechanism for immediate booking with the POST appointment endpoint. To complete the booking in one transaction, populate the &lt;b&gt;completeBooking&lt;/b&gt; parameter with a "BK", booked or an "RS", reserved status and provide an (&lt;b&gt;email&lt;/b&gt; and &lt;b&gt;name&lt;/b&gt;) or a &lt;b&gt;customerId&lt;/b&gt; in the post body. Doing so will book the appointment and send notifications all in one transaction. &lt;b&gt;Note:&lt;/b&gt; "IN" can also be used as a completeBooking option to support payment flows. With the "IN" option, notifications are NOT sent.&lt;/p&gt;
     * &lt;p&gt;For more information: &lt;a href="https://onsched.readme.io/docs/appointments-overview"&gt;Appointments Overview&lt;/a&gt;&lt;/p&gt;
     * @param request the request object containing all of the parameters for the API call
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.PostConsumerV1AppointmentsResponse postConsumerV1Appointments(org.openapis.openapi.models.operations.PostConsumerV1AppointmentsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(baseUrl, "/consumer/v1/appointments");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "appointmentInitialModel", "json");
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.PostConsumerV1AppointmentsRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.PostConsumerV1AppointmentsResponse res = new org.openapis.openapi.models.operations.PostConsumerV1AppointmentsResponse(contentType, httpRes.statusCode()) {{
            appointmentInitialViewModel = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.AppointmentInitialViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.AppointmentInitialViewModel.class);
                res.appointmentInitialViewModel = out;
            }
        }

        return res;
    }

    /**
     * Book Appointment
     * &lt;p&gt;Use this endpoint to &lt;b&gt;Book&lt;/b&gt; an appointment. Only appointments with an "IN" status, Initial, can be booked. A valid &lt;b&gt;appointment id&lt;/b&gt; is required. Use the appointment id returned from the initial &lt;i&gt;POST /consumer/v1/appointments&lt;/i&gt; endpoint. Other pertinent fields can also be updated at the time of booking by including them in the post body. &lt;b&gt;Note: If no name or email address was provided in the initial Post Appointment, it will be required in the post body.&lt;/b&gt;&lt;/p&gt;
     * &lt;p&gt;For more information: &lt;a href="https://onsched.readme.io/docs/appointments-overview"&gt;Appointments Overview&lt;/a&gt;&lt;/p&gt;
     * @param request the request object containing all of the parameters for the API call
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdBookResponse putConsumerV1AppointmentsIdBook(org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdBookRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdBookRequest.class, baseUrl, "/consumer/v1/appointments/{id}/book", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "appointmentBookModel", "json");
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdBookResponse res = new org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdBookResponse(contentType, httpRes.statusCode()) {{
            appointmentViewModel = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.AppointmentViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.AppointmentViewModel.class);
                res.appointmentViewModel = out;
            }
        }

        return res;
    }

    /**
     * Cancel Appointment
     * &lt;p&gt;Use this endpoint to &lt;b&gt;Cancel&lt;/b&gt; an appointment booking or reservation. Only appointments with a "BK", booked or "RS", reserved status can be cancelled. Past dated appointments cannot be cancelled. A valid &lt;b&gt;appointment id&lt;/b&gt; is required. For more information: &lt;a href="https://onsched.readme.io/docs/appointments-overview"&gt;Appointment Overview&lt;/a&gt;&lt;/p&gt;
     * @param request the request object containing all of the parameters for the API call
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdCancelResponse putConsumerV1AppointmentsIdCancel(org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdCancelRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdCancelRequest.class, baseUrl, "/consumer/v1/appointments/{id}/cancel", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdCancelResponse res = new org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdCancelResponse(contentType, httpRes.statusCode()) {{
            appointmentViewModel = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.AppointmentViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.AppointmentViewModel.class);
                res.appointmentViewModel = out;
            }
        }

        return res;
    }

    /**
     * Confirm Appointment
     * &lt;p&gt;Use this endpoint to &lt;b&gt;Confirm&lt;/b&gt; an appointment. This updates the boolean confirmed field to TRUE. &lt;b&gt;NOTE:&lt;/b&gt; If the appointment status is set to "RS", Reserved, it also updates the status of the appointment to "BK", Booked. &lt;/p&gt;
     * &lt;p&gt;For more information: &lt;a href="https://onsched.readme.io/docs/appointments-overview"&gt;Appointment Overview&lt;/a&gt;&lt;/p&gt;
     * @param request the request object containing all of the parameters for the API call
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdConfirmResponse putConsumerV1AppointmentsIdConfirm(org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdConfirmRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdConfirmRequest.class, baseUrl, "/consumer/v1/appointments/{id}/confirm", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdConfirmRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdConfirmResponse res = new org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdConfirmResponse(contentType, httpRes.statusCode()) {{
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }

    /**
     * Set NoShow Status
     * &lt;p&gt;Use this endpoint to change the status of an appointment from "BK", Booked to &lt;b&gt;"NS", NoShow&lt;/b&gt;. This gives API consumers a way to internally track No Show appointments. It provides no added functionality in OnSched.&lt;/p&gt;
     * &lt;p&gt;For more information: &lt;a href="https://onsched.readme.io/docs/appointments-overview"&gt;Appointment Overview&lt;/a&gt;&lt;/p&gt;
     * @param request the request object containing all of the parameters for the API call
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdNoshowResponse putConsumerV1AppointmentsIdNoshow(org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdNoshowRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdNoshowRequest.class, baseUrl, "/consumer/v1/appointments/{id}/noshow", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "requestBody", "json");
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdNoshowResponse res = new org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdNoshowResponse(contentType, httpRes.statusCode()) {{
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }

    /**
     * Reschedule Appointment
     * &lt;p&gt;Use this endpoint to &lt;b&gt;Reschedule&lt;/b&gt; an appointment booking. Only appointments in "BK", booked status, can be Rescheduled. Past dated appointments cannot be rescheduled. A valid &lt;b&gt;appointment id&lt;/b&gt; is required.&lt;/p&gt;
     * &lt;p&gt;The &lt;b&gt;StartDateTime&lt;/b&gt; and &lt;b&gt;EndDateTime&lt;/b&gt; are required. Use the ISO 8601 format for DateTime Timezone, e.g., &lt;b&gt;2016-10-30T09:00:00-5:00&lt;/b&gt;.&lt;/p&gt;
     * &lt;p&gt;The serviceId is optional. If changing the &lt;b&gt;serviceId&lt;/b&gt;, the new service id's duration must match the original service's duration.&lt;/p&gt;
     * &lt;p&gt;The resourceId is optional. If changing the &lt;b&gt;resourceId&lt;/b&gt;, verify the availability of the new resource prior to rescheduling.&lt;/p&gt;
     * &lt;p&gt;
     *   &lt;b&gt;IMPORTANT:&lt;/b&gt; Always run availability before rescheduling an appointment to verify the timeslot is open and available for the new time, service and/or resource requested. This is the only way to assure the slot is available. You cannot reschedule an appointment to a different location. If necessary, you should cancel and then book an appointment in the other location.&lt;/p&gt;
     * &lt;p&gt;For more information: &lt;a href="https://onsched.readme.io/docs/appointments-overview"&gt;Appointment Overview&lt;/a&gt;&lt;/p&gt;
     * @param request the request object containing all of the parameters for the API call
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdRescheduleResponse putConsumerV1AppointmentsIdReschedule(org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdRescheduleRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdRescheduleRequest.class, baseUrl, "/consumer/v1/appointments/{id}/reschedule", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "appointmentRescheduleModel", "json");
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdRescheduleResponse res = new org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdRescheduleResponse(contentType, httpRes.statusCode()) {{
            appointmentViewModel = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.AppointmentViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.AppointmentViewModel.class);
                res.appointmentViewModel = out;
            }
        }

        return res;
    }

    /**
     * Reserve Appointment
     * &lt;p&gt;Use this endpoint to &lt;b&gt;Reserve&lt;/b&gt; an appointment. Only appointments with an "IN" status, Initial, can be reserved. A valid &lt;b&gt;appointment id&lt;/b&gt; is required. Use the appointment id returned from the initial &lt;i&gt;POST /consumer/v1/appointments&lt;/i&gt; endpoint.&lt;/p&gt;
     * &lt;p&gt;
     *   &lt;b&gt;NOTE: Reservations are different from Bookings as reservations are a two-step booking process that must be managed by the API consumer.&lt;/b&gt; An appointment that is reserved is not completely booked until other business conditions have been met. For example, an appointment may be reserved if it is not yet assigned to a resource or until the customer or resource explicitly confirms it.&lt;/p&gt;
     * &lt;p&gt;With reservations you have the ability to notify the customer of a reservation prior to officially booking and the workflow can be designed to indicate what conditions will need to be met in order to convert the reservation to a complete booking. A reservation converts to a complete booking when it is either Confirmed or Booked. &lt;/p&gt;
     * &lt;p&gt;
     *   &lt;b&gt;IMPORTANT: A reserved appointment time will not be released, i.e., become available to others, until it is Cancelled. The booking timer is not used with reserved appointments.&lt;/b&gt;
     * &lt;/p&gt;
     * &lt;p&gt;For more information: &lt;a href="https://onsched.readme.io/docs/appointments-overview"&gt;Appointments Overview&lt;/a&gt;&lt;/p&gt;
     * @param request the request object containing all of the parameters for the API call
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdReserveResponse putConsumerV1AppointmentsIdReserve(org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdReserveRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdReserveRequest.class, baseUrl, "/consumer/v1/appointments/{id}/reserve", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "appointmentReserveModel", "json");
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdReserveRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdReserveResponse res = new org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdReserveResponse(contentType, httpRes.statusCode()) {{
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
}