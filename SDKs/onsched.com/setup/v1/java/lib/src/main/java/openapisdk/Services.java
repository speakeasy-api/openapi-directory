package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Services {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Services(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteSetupV1ServicesAllocationsId - Delete a service allocation object
     *
     * Deletes a service allocation.
    **/
    public openapisdk.models.operations.DeleteSetupV1ServicesAllocationsIdResponse deleteSetupV1ServicesAllocationsId(openapisdk.models.operations.DeleteSetupV1ServicesAllocationsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/services/allocations/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSetupV1ServicesAllocationsIdResponse res = new openapisdk.models.operations.DeleteSetupV1ServicesAllocationsIdResponse() {{
            serviceAllocationViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServiceAllocationViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServiceAllocationViewModel.class);
                res.serviceAllocationViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteSetupV1ServicesBlockId - Delete a service block object
     *
     * Deletes a service block.
    **/
    public openapisdk.models.operations.DeleteSetupV1ServicesBlockIdResponse deleteSetupV1ServicesBlockId(openapisdk.models.operations.DeleteSetupV1ServicesBlockIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/services/block/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSetupV1ServicesBlockIdResponse res = new openapisdk.models.operations.DeleteSetupV1ServicesBlockIdResponse() {{
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
     * deleteSetupV1ServicesBookingwindowsId - Permanently deletes bookingWindow object.
     *
     * Use this endpoint to permanently delete a bookingWindow.
    **/
    public openapisdk.models.operations.DeleteSetupV1ServicesBookingwindowsIdResponse deleteSetupV1ServicesBookingwindowsId(openapisdk.models.operations.DeleteSetupV1ServicesBookingwindowsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/services/bookingwindows/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSetupV1ServicesBookingwindowsIdResponse res = new openapisdk.models.operations.DeleteSetupV1ServicesBookingwindowsIdResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteSetupV1ServicesCalendarIdResponse deleteSetupV1ServicesCalendarId(openapisdk.models.operations.DeleteSetupV1ServicesCalendarIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/services/calendar/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSetupV1ServicesCalendarIdResponse res = new openapisdk.models.operations.DeleteSetupV1ServicesCalendarIdResponse() {{
            serviceCalendarViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServiceCalendarViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServiceCalendarViewModel.class);
                res.serviceCalendarViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteSetupV1ServicesId - Deletes a service object.
     *
     * Use this endpoint to delete a service. The service is not permanently deleted and can be recovered.
    **/
    public openapisdk.models.operations.DeleteSetupV1ServicesIdResponse deleteSetupV1ServicesId(openapisdk.models.operations.DeleteSetupV1ServicesIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/services/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSetupV1ServicesIdResponse res = new openapisdk.models.operations.DeleteSetupV1ServicesIdResponse() {{
            serviceViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServiceViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServiceViewModel.class);
                res.serviceViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteSetupV1ServicesIdDeleteimage - Removes a service image
     *
     * Use this endpoint to delete a previously uploaded service image.
    **/
    public openapisdk.models.operations.DeleteSetupV1ServicesIdDeleteimageResponse deleteSetupV1ServicesIdDeleteimage(openapisdk.models.operations.DeleteSetupV1ServicesIdDeleteimageRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/services/{id}/deleteimage", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSetupV1ServicesIdDeleteimageResponse res = new openapisdk.models.operations.DeleteSetupV1ServicesIdDeleteimageResponse() {{
            serviceViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServiceViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServiceViewModel.class);
                res.serviceViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSetupV1Services - Returns a list of services.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    public openapisdk.models.operations.GetSetupV1ServicesResponse getSetupV1Services(openapisdk.models.operations.GetSetupV1ServicesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/services");
        
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

        openapisdk.models.operations.GetSetupV1ServicesResponse res = new openapisdk.models.operations.GetSetupV1ServicesResponse() {{
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
     * getSetupV1ServicesAllocationsId - Get a service allocation
    **/
    public openapisdk.models.operations.GetSetupV1ServicesAllocationsIdResponse getSetupV1ServicesAllocationsId(openapisdk.models.operations.GetSetupV1ServicesAllocationsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/services/allocations/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSetupV1ServicesAllocationsIdResponse res = new openapisdk.models.operations.GetSetupV1ServicesAllocationsIdResponse() {{
            serviceAllocationViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServiceAllocationViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServiceAllocationViewModel.class);
                res.serviceAllocationViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSetupV1ServicesBlocksId - Get a service block
    **/
    public openapisdk.models.operations.GetSetupV1ServicesBlocksIdResponse getSetupV1ServicesBlocksId(openapisdk.models.operations.GetSetupV1ServicesBlocksIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/services/blocks/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSetupV1ServicesBlocksIdResponse res = new openapisdk.models.operations.GetSetupV1ServicesBlocksIdResponse() {{
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
     * getSetupV1ServicesBookingwindowsId - Get a booking window
    **/
    public openapisdk.models.operations.GetSetupV1ServicesBookingwindowsIdResponse getSetupV1ServicesBookingwindowsId(openapisdk.models.operations.GetSetupV1ServicesBookingwindowsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/services/bookingwindows/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSetupV1ServicesBookingwindowsIdResponse res = new openapisdk.models.operations.GetSetupV1ServicesBookingwindowsIdResponse() {{
            bookingWindowViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BookingWindowViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BookingWindowViewModel.class);
                res.bookingWindowViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSetupV1ServicesId - Returns a service object.
     *
     * The result returned is a single service object. An id is required to find the service. Find service id's using either the GET consumer/v1/service end point,
     * or the GET consumer/v1/appointments end point.
    **/
    public openapisdk.models.operations.GetSetupV1ServicesIdResponse getSetupV1ServicesId(openapisdk.models.operations.GetSetupV1ServicesIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/services/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSetupV1ServicesIdResponse res = new openapisdk.models.operations.GetSetupV1ServicesIdResponse() {{
            serviceViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServiceViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServiceViewModel.class);
                res.serviceViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSetupV1ServicesIdAllocations - Returns a list of service allocations.
     *
     * This endpoint is used primarily for event booking. When you create service type events, you allocation specific occurrences of the event 
     * against the service. 
     * 
     * You can retrieve all allocations for a location by passing in zero as the service id. Otherwise, to get allocations for a specific service
     * pass in the service id.
     * 
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    public openapisdk.models.operations.GetSetupV1ServicesIdAllocationsResponse getSetupV1ServicesIdAllocations(openapisdk.models.operations.GetSetupV1ServicesIdAllocationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/services/{id}/allocations", request.pathParams);
        
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

        openapisdk.models.operations.GetSetupV1ServicesIdAllocationsResponse res = new openapisdk.models.operations.GetSetupV1ServicesIdAllocationsResponse() {{
            serviceAllocationListViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.serviceAllocationListViewModel = out;
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
     * getSetupV1ServicesIdAvailability - Returns a list of weekly availability
     *
     * Use this endpoint to get weekly availability for a service.
    **/
    public openapisdk.models.operations.GetSetupV1ServicesIdAvailabilityResponse getSetupV1ServicesIdAvailability(openapisdk.models.operations.GetSetupV1ServicesIdAvailabilityRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/services/{id}/availability", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSetupV1ServicesIdAvailabilityResponse res = new openapisdk.models.operations.GetSetupV1ServicesIdAvailabilityResponse() {{
            serviceAvailabilityViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServiceAvailabilityViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServiceAvailabilityViewModel.class);
                res.serviceAvailabilityViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSetupV1ServicesIdBlocks - Returns a list of service blocks.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    public openapisdk.models.operations.GetSetupV1ServicesIdBlocksResponse getSetupV1ServicesIdBlocks(openapisdk.models.operations.GetSetupV1ServicesIdBlocksRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/services/{id}/blocks", request.pathParams);
        
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

        openapisdk.models.operations.GetSetupV1ServicesIdBlocksResponse res = new openapisdk.models.operations.GetSetupV1ServicesIdBlocksResponse() {{
            serviceBlockListViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.serviceBlockListViewModel = out;
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
     * getSetupV1ServicesIdBookingwindows - Returns a list of service booking windows.
     *
     * This endpoint is used to retrieve any booking windows related to the service
     * 
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    public openapisdk.models.operations.GetSetupV1ServicesIdBookingwindowsResponse getSetupV1ServicesIdBookingwindows(openapisdk.models.operations.GetSetupV1ServicesIdBookingwindowsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/services/{id}/bookingwindows", request.pathParams);
        
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

        openapisdk.models.operations.GetSetupV1ServicesIdBookingwindowsResponse res = new openapisdk.models.operations.GetSetupV1ServicesIdBookingwindowsResponse() {{
            bookingWindowViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BookingWindowViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BookingWindowViewModel.class);
                res.bookingWindowViewModel = out;
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
     * getSetupV1ServicesIdCalendar - Returns the linked calendar for the service
     *
     * Use this endpoint to get the linked calendar for the service.
     * A service can only be linked to one calendar in a location.
    **/
    public openapisdk.models.operations.GetSetupV1ServicesIdCalendarResponse getSetupV1ServicesIdCalendar(openapisdk.models.operations.GetSetupV1ServicesIdCalendarRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/services/{id}/calendar", request.pathParams);
        
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

        openapisdk.models.operations.GetSetupV1ServicesIdCalendarResponse res = new openapisdk.models.operations.GetSetupV1ServicesIdCalendarResponse() {{
            serviceCalendarViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServiceCalendarViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServiceCalendarViewModel.class);
                res.serviceCalendarViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSetupV1ServicesIdResources - Returns a list of resources for the specified service.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    public openapisdk.models.operations.GetSetupV1ServicesIdResourcesResponse getSetupV1ServicesIdResources(openapisdk.models.operations.GetSetupV1ServicesIdResourcesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/services/{id}/resources", request.pathParams);
        
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

        openapisdk.models.operations.GetSetupV1ServicesIdResourcesResponse res = new openapisdk.models.operations.GetSetupV1ServicesIdResourcesResponse() {{
            resourceListViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.resourceListViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * postSetupV1Services - Creates a new service object.
     *
     * Use this endpoint to create a new service. If not specified the business location id defaults to the first location in the company.
     * The service Type defaults to 1 if not entered.
     * The service Type can be one of the following values:
     * 1 = Appointment
     * 2 = Event
     * 3 = Meeting
    **/
    public openapisdk.models.operations.PostSetupV1ServicesResponse postSetupV1Services(openapisdk.models.operations.PostSetupV1ServicesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/services");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostSetupV1ServicesResponse res = new openapisdk.models.operations.PostSetupV1ServicesResponse() {{
            serviceViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServiceViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServiceViewModel.class);
                res.serviceViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * postSetupV1ServicesBookingwindows - Creates a new bookingWindow object.
     *
     * Use this endpoint to create a new bookingWindow.
    **/
    public openapisdk.models.operations.PostSetupV1ServicesBookingwindowsResponse postSetupV1ServicesBookingwindows(openapisdk.models.operations.PostSetupV1ServicesBookingwindowsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/services/bookingwindows");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostSetupV1ServicesBookingwindowsResponse res = new openapisdk.models.operations.PostSetupV1ServicesBookingwindowsResponse() {{
            bookingWindowViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BookingWindowViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BookingWindowViewModel.class);
                res.bookingWindowViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * postSetupV1ServicesCalendar - Links the service to a calendar
     *
     * Use this endpoint to link a service to a calendar.
    **/
    public openapisdk.models.operations.PostSetupV1ServicesCalendarResponse postSetupV1ServicesCalendar(openapisdk.models.operations.PostSetupV1ServicesCalendarRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/services/calendar");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostSetupV1ServicesCalendarResponse res = new openapisdk.models.operations.PostSetupV1ServicesCalendarResponse() {{
            serviceCalendarViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServiceCalendarViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServiceCalendarViewModel.class);
                res.serviceCalendarViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * postSetupV1ServicesIdAllocations - Create a new service allocation
     *
     * Creates a new service allocation. You must specify a StartDate and EndDate.
     * A reason for the allocation is also required. This reason will display in the OnSched Portal Calendar.
     * 
     * Service allocations are used primarily for event type services. The allocation represents an occurrence of an allocation.
     * 
     * Service allocations can be set to specific time ranges or for the whole day. Use the AllDay setting to create an all day block.
     * 
     * Service allocations can be for a specific date range instance or set to repeat at a specified frequency.
     * The frequency can be set to a value of D,W,M,Y for Day, Week, Month, or Year respecitively. 
     * 
     * Daily allocations will repeat for each day of the week for the date range specified.
     * 
     * Weekly allocations will repeat only on the specified days of the week for the date range specified. For a weekly block
     * you must also specify the weekdays. Weekdays are expressed as a string of digits with each single digit in the string representing a day
     * of the week. The possible values are 0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wed, 4=Thursday, 5=Friday, 6=Saturday.
     * For example a repeat weekly entry with weekdays 24 repeats each week on Tuesday and Thursday.
     * 
     * Use the interval property to specify the interval that the allocation repeats. For example an interval of 2 for a weekly block means that
     * the block will repeat every second week beginning at the day specified. A daily block with an interval of 10 means the block will
     * repeat every 10 days. The interval property applies to all repeat frequencies.
     * 
     * Monthly allocations repeat either on the day of the month specified in the month day property or on the day of the week and week of the month specified by
     * the start date. For example, repeat every 3rd friday of each month, repeat on the 21st day of the month.
     * 
     * Repeat allocations will end on the date specified by the end date. You can specify 9999-12-31 in the EndDate field to indicate the repeating block
     * should continue indefinitely.
    **/
    public openapisdk.models.operations.PostSetupV1ServicesIdAllocationsResponse postSetupV1ServicesIdAllocations(openapisdk.models.operations.PostSetupV1ServicesIdAllocationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/services/{id}/allocations", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostSetupV1ServicesIdAllocationsResponse res = new openapisdk.models.operations.PostSetupV1ServicesIdAllocationsResponse() {{
            serviceAllocationViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServiceAllocationViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServiceAllocationViewModel.class);
                res.serviceAllocationViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * postSetupV1ServicesIdAllocationsBulk - Create new service allocations in bulk
     *
     * Creates new service allocations in bulk. Refer to documentation
     * for creating a single Service Allocation POST /setup/v1/services/{id}/allocations
     * for understanding how to populate the properties
     * 
     * Use this endpoint only if you need to POST multiple allocations in one call
    **/
    public openapisdk.models.operations.PostSetupV1ServicesIdAllocationsBulkResponse postSetupV1ServicesIdAllocationsBulk(openapisdk.models.operations.PostSetupV1ServicesIdAllocationsBulkRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/services/{id}/allocations/bulk", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostSetupV1ServicesIdAllocationsBulkResponse res = new openapisdk.models.operations.PostSetupV1ServicesIdAllocationsBulkResponse() {{
            serviceAllocationViewModels = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServiceAllocationViewModel[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServiceAllocationViewModel[].class);
                res.serviceAllocationViewModels = out;
            }
        }

        return res;
    }
	
	
    /**
     * postSetupV1ServicesIdBlock - Create a new service block
     *
     * Creates a new service block. You must specify a StartDateTime and EndDateTime.
     * A reason for the block is also required. This reason will display in the OnSched Portal Calendar.
     * 
     * Service blocks can be set to specific time ranges or for the whole day. Use the AllDay setting to create an all day block.
     * 
     * Service blocks can be for a specific date range instance or set to repeat at a specified frequency.
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
     * Repeat blocks will end on the date specified by the end date. You can specify 9999-12-31 in 
     * the EndDate field to indicate the repeating block should continue indefinitely.
    **/
    public openapisdk.models.operations.PostSetupV1ServicesIdBlockResponse postSetupV1ServicesIdBlock(openapisdk.models.operations.PostSetupV1ServicesIdBlockRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/services/{id}/block", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostSetupV1ServicesIdBlockResponse res = new openapisdk.models.operations.PostSetupV1ServicesIdBlockResponse() {{
            serviceBlockViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServiceBlockViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServiceBlockViewModel.class);
                res.serviceBlockViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * postSetupV1ServicesIdUploadimage - Uploads a service image
     *
     * Use this endpoint to upload a service image. You must convert the image to a base64 encoded string
     * and pass that string as input along with your filename.
    **/
    public openapisdk.models.operations.PostSetupV1ServicesIdUploadimageResponse postSetupV1ServicesIdUploadimage(openapisdk.models.operations.PostSetupV1ServicesIdUploadimageRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/services/{id}/uploadimage", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostSetupV1ServicesIdUploadimageResponse res = new openapisdk.models.operations.PostSetupV1ServicesIdUploadimageResponse() {{
            serviceViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServiceViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServiceViewModel.class);
                res.serviceViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * putSetupV1ServicesAllocationsId - Update a service allocation
     *
     * Updates a service allocation. Refer to the details in the POST service allocation for setting each of the required parameters.
    **/
    public openapisdk.models.operations.PutSetupV1ServicesAllocationsIdResponse putSetupV1ServicesAllocationsId(openapisdk.models.operations.PutSetupV1ServicesAllocationsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/services/allocations/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutSetupV1ServicesAllocationsIdResponse res = new openapisdk.models.operations.PutSetupV1ServicesAllocationsIdResponse() {{
            serviceAllocationViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServiceAllocationViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServiceAllocationViewModel.class);
                res.serviceAllocationViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * putSetupV1ServicesBlockId - Update a service block
     *
     * Updates a resource block. Refer to the details in the POST resource block for setting each of the required parameters.
    **/
    public openapisdk.models.operations.PutSetupV1ServicesBlockIdResponse putSetupV1ServicesBlockId(openapisdk.models.operations.PutSetupV1ServicesBlockIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/services/block/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutSetupV1ServicesBlockIdResponse res = new openapisdk.models.operations.PutSetupV1ServicesBlockIdResponse() {{
            serviceBlockViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServiceBlockViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServiceBlockViewModel.class);
                res.serviceBlockViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * putSetupV1ServicesBookingwindowsId - Updates a bookingWindow object.
     *
     * Use this endpoint to update a booking window
    **/
    public openapisdk.models.operations.PutSetupV1ServicesBookingwindowsIdResponse putSetupV1ServicesBookingwindowsId(openapisdk.models.operations.PutSetupV1ServicesBookingwindowsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/services/bookingwindows/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutSetupV1ServicesBookingwindowsIdResponse res = new openapisdk.models.operations.PutSetupV1ServicesBookingwindowsIdResponse() {{
            bookingWindowViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BookingWindowViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BookingWindowViewModel.class);
                res.bookingWindowViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * putSetupV1ServicesId - Updates a service object.
     *
     * Use this endpoint to update a service.
    **/
    public openapisdk.models.operations.PutSetupV1ServicesIdResponse putSetupV1ServicesId(openapisdk.models.operations.PutSetupV1ServicesIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/services/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutSetupV1ServicesIdResponse res = new openapisdk.models.operations.PutSetupV1ServicesIdResponse() {{
            serviceViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServiceViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServiceViewModel.class);
                res.serviceViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * putSetupV1ServicesIdAvailability - Updates Weekly Availability
     *
     * Use this endpoint to update service availability. The Id parameter specifies the service
     * for which you are updating availability. Availability day entries do not need to be created. 
     * The availbility day entries are created when a service object is created. They default to
     * the business hours.
     * 
     * Create an entry for each weekday you wish to update. Days are defined as sun,mon,tue,wed,thu,fri,sat.
     * Start and End Times are entered in miltary format. e.g 2230 is 10:30pm. 
     * 
     * OnSched API provides support for 24 hour availability. For midnight start of day use 0. For midnight end of day use 2400.
     * 
     * To set a day as unavailable, set both the StartTime and EndTime to 0. If you require times in between specified hours
     * to be unavailable, use the resource blocks endpoints. 
     * 
     * Times entered represent the timezone of the business location.
    **/
    public openapisdk.models.operations.PutSetupV1ServicesIdAvailabilityResponse putSetupV1ServicesIdAvailability(openapisdk.models.operations.PutSetupV1ServicesIdAvailabilityRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/services/{id}/availability", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutSetupV1ServicesIdAvailabilityResponse res = new openapisdk.models.operations.PutSetupV1ServicesIdAvailabilityResponse() {{
            serviceAvailabilityViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServiceAvailabilityViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServiceAvailabilityViewModel.class);
                res.serviceAvailabilityViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * putSetupV1ServicesIdRecover - Recovers a service object.
     *
     * Use this endpoint to recover a deleted service.
    **/
    public openapisdk.models.operations.PutSetupV1ServicesIdRecoverResponse putSetupV1ServicesIdRecover(openapisdk.models.operations.PutSetupV1ServicesIdRecoverRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/services/{id}/recover", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutSetupV1ServicesIdRecoverResponse res = new openapisdk.models.operations.PutSetupV1ServicesIdRecoverResponse() {{
            serviceViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServiceViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServiceViewModel.class);
                res.serviceViewModel = out;
            }
        }

        return res;
    }
	
}