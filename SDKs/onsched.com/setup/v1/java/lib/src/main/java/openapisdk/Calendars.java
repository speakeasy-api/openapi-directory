package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Calendars {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Calendars(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteSetupV1CalendarsBlockId - Delete a calendar block object
     *
     * Deletes a calendar block.
    **/
    public openapisdk.models.operations.DeleteSetupV1CalendarsBlockIdResponse deleteSetupV1CalendarsBlockId(openapisdk.models.operations.DeleteSetupV1CalendarsBlockIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/calendars/block/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSetupV1CalendarsBlockIdResponse res = new openapisdk.models.operations.DeleteSetupV1CalendarsBlockIdResponse() {{
            calendarBlockViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CalendarBlockViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CalendarBlockViewModel.class);
                res.calendarBlockViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteSetupV1CalendarsId - Deletes a calendar object.
     *
     * Use this endpoint to delete a calendar. The calendar is not permanently deleted and can be recovered.
    **/
    public openapisdk.models.operations.DeleteSetupV1CalendarsIdResponse deleteSetupV1CalendarsId(openapisdk.models.operations.DeleteSetupV1CalendarsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/calendars/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSetupV1CalendarsIdResponse res = new openapisdk.models.operations.DeleteSetupV1CalendarsIdResponse() {{
            scheduleViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ScheduleViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ScheduleViewModel.class);
                res.scheduleViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSetupV1Calendars - Returns a list of calendars.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    public openapisdk.models.operations.GetSetupV1CalendarsResponse getSetupV1Calendars(openapisdk.models.operations.GetSetupV1CalendarsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/calendars");
        
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

        openapisdk.models.operations.GetSetupV1CalendarsResponse res = new openapisdk.models.operations.GetSetupV1CalendarsResponse() {{
            scheduleListViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.scheduleListViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSetupV1CalendarsBlocksId - Update a calendar block
    **/
    public openapisdk.models.operations.GetSetupV1CalendarsBlocksIdResponse getSetupV1CalendarsBlocksId(openapisdk.models.operations.GetSetupV1CalendarsBlocksIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/calendars/blocks/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSetupV1CalendarsBlocksIdResponse res = new openapisdk.models.operations.GetSetupV1CalendarsBlocksIdResponse() {{
            calendarBlockViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CalendarBlockViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CalendarBlockViewModel.class);
                res.calendarBlockViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSetupV1CalendarsId - Returns a calendar object.
     *
     * The result returned is a single calendar object. An id is required to find the calendar.
    **/
    public openapisdk.models.operations.GetSetupV1CalendarsIdResponse getSetupV1CalendarsId(openapisdk.models.operations.GetSetupV1CalendarsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/calendars/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSetupV1CalendarsIdResponse res = new openapisdk.models.operations.GetSetupV1CalendarsIdResponse() {{
            scheduleViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ScheduleViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ScheduleViewModel.class);
                res.scheduleViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSetupV1CalendarsIdBlocks - Returns a list of calendar blocks.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    public openapisdk.models.operations.GetSetupV1CalendarsIdBlocksResponse getSetupV1CalendarsIdBlocks(openapisdk.models.operations.GetSetupV1CalendarsIdBlocksRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/calendars/{id}/blocks", request.pathParams);
        
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

        openapisdk.models.operations.GetSetupV1CalendarsIdBlocksResponse res = new openapisdk.models.operations.GetSetupV1CalendarsIdBlocksResponse() {{
            calendarBlockListViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.calendarBlockListViewModel = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
	
    /**
     * getSetupV1CalendarsIdServices - Returns a list of services linked to a calendar.
     *
     * The result returned is a list of services. An id is required to find the service. Find calendar id's using either the GET setup/v1/calendars end point
    **/
    public openapisdk.models.operations.GetSetupV1CalendarsIdServicesResponse getSetupV1CalendarsIdServices(openapisdk.models.operations.GetSetupV1CalendarsIdServicesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/calendars/{id}/services", request.pathParams);
        
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

        openapisdk.models.operations.GetSetupV1CalendarsIdServicesResponse res = new openapisdk.models.operations.GetSetupV1CalendarsIdServicesResponse() {{
            serviceListViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.serviceListViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * postSetupV1Calendars - Creates a new calendar object.
     *
     * Use this endpoint to create an additional calendar. If not specified, the business location id defaults to the primary location of the company.<br /><br />
     * Note: Every location has a primary calendar. All appointments will be booked to that calendar unless otherwise specified with a linked service.<br /><br />
     * name is a required parameter<br /><br />
     * type is a required parameter with a value of “resource”<br /><br />
     * interval is a required parameter with a value of 1,5,10,15,20,30,60<br /><br />
     * bookingsPerSlot is a required parameter with a value between 1 and 20<br /><br />
     * scheduleGroupId is an optional parameter.If supplied, it must be a valid Resource Group Id<br /><br />
     * weekly availability is optional.If this element is not populated, then weekly availability defaults to the business hours<br /><br />
    **/
    public openapisdk.models.operations.PostSetupV1CalendarsResponse postSetupV1Calendars(openapisdk.models.operations.PostSetupV1CalendarsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/calendars");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostSetupV1CalendarsResponse res = new openapisdk.models.operations.PostSetupV1CalendarsResponse() {{
            scheduleViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ScheduleViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ScheduleViewModel.class);
                res.scheduleViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * postSetupV1CalendarsIdBlock - Create a new calendar block
     *
     * Creates a new calendar block. You must specify a StartDateTime and EndDateTime.
     * A reason for the block is also required. This reason will display in the OnSched Portal Calendar.
     * 
     * Calendar blocks can be set to specific time ranges or for the whole day. 
     * 
     * Calendar blocks can be for a specific date range instance or set to repeat at a specified frequency.
     * The frequency can be set to a value of D,W,M,Y for Day, Week, Month, or Year respecitively. 
     * 
     * Daily blocks will repeat for each day of the week for the date range specified.
     * 
     * Weekly blocks will repeat only on the specified days of the week for the date range specified. For a weekly block
     * you must also specify the weekdays. Weekdays are expressed as a string of digits with each single digit in the string representing a day
     * of the week. The possible values are 0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wed, 4=Thursday, 5=Friday, 6=Saturday.
     * For example a repeat weekly entry with weekdays 24 repeats each week on Tuesday and Thursday.
     * 
     * Use the interval property to specify the interval that the block repeats. For example an interval of 2 for a weekly block means that
     * the block will repeat every second week beginning at the day specified. A daily block with an interval of 10 means the block will
     * repeat every 10 days. The interval property applies to all repeat frequencies.
     * 
     * Monthly blocks repeat either on the day of the month specified in the month day property or on the day of the week and week of the month specified by
     * the start date. For example, repeat every 3rd friday of each month, repeat on the 21st day of the month.
     * 
     * Repeat blocks will end on the date specified by the end date. You can specify never in the EndDateTime field to indicate the repeating block
     * should continue indefinitely.
    **/
    public openapisdk.models.operations.PostSetupV1CalendarsIdBlockResponse postSetupV1CalendarsIdBlock(openapisdk.models.operations.PostSetupV1CalendarsIdBlockRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/calendars/{id}/block", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostSetupV1CalendarsIdBlockResponse res = new openapisdk.models.operations.PostSetupV1CalendarsIdBlockResponse() {{
            resourceBlockViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResourceBlockViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResourceBlockViewModel.class);
                res.resourceBlockViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * putSetupV1CalendarsBlockId - Update a calendar block
     *
     * Updates a calendar block. Refer to the details in the POST calendar block for setting each of the required parameters.
    **/
    public openapisdk.models.operations.PutSetupV1CalendarsBlockIdResponse putSetupV1CalendarsBlockId(openapisdk.models.operations.PutSetupV1CalendarsBlockIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/calendars/block/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutSetupV1CalendarsBlockIdResponse res = new openapisdk.models.operations.PutSetupV1CalendarsBlockIdResponse() {{
            calendarBlockViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CalendarBlockViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CalendarBlockViewModel.class);
                res.calendarBlockViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * putSetupV1CalendarsId - Updates a calendar object.
     *
     * Use this endpoint to update a calendar. 
     * Calendar availability is optional. If this element is not populated then weekly availability is not updated
    **/
    public openapisdk.models.operations.PutSetupV1CalendarsIdResponse putSetupV1CalendarsId(openapisdk.models.operations.PutSetupV1CalendarsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/calendars/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutSetupV1CalendarsIdResponse res = new openapisdk.models.operations.PutSetupV1CalendarsIdResponse() {{
            scheduleViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ScheduleViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ScheduleViewModel.class);
                res.scheduleViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * putSetupV1CalendarsIdRecover - Recovers a calendar object.
     *
     * Use this endpoint to recover a deleted calendar.
    **/
    public openapisdk.models.operations.PutSetupV1CalendarsIdRecoverResponse putSetupV1CalendarsIdRecover(openapisdk.models.operations.PutSetupV1CalendarsIdRecoverRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/calendars/{id}/recover", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutSetupV1CalendarsIdRecoverResponse res = new openapisdk.models.operations.PutSetupV1CalendarsIdRecoverResponse() {{
            scheduleViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ScheduleViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ScheduleViewModel.class);
                res.scheduleViewModel = out;
            }
        }

        return res;
    }
	
}