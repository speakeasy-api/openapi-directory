package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Resources {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Resources(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteSetupV1ResourcesAllocationsId - Delete a resource allocation object
     *
     * Deletes a resource allocation.
    **/
    public openapisdk.models.operations.DeleteSetupV1ResourcesAllocationsIdResponse deleteSetupV1ResourcesAllocationsId(openapisdk.models.operations.DeleteSetupV1ResourcesAllocationsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/resources/allocations/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSetupV1ResourcesAllocationsIdResponse res = new openapisdk.models.operations.DeleteSetupV1ResourcesAllocationsIdResponse() {{
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
     * deleteSetupV1ResourcesBlockId - Delete a resource block object
     *
     * Deletes a resource block.
    **/
    public openapisdk.models.operations.DeleteSetupV1ResourcesBlockIdResponse deleteSetupV1ResourcesBlockId(openapisdk.models.operations.DeleteSetupV1ResourcesBlockIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/resources/block/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSetupV1ResourcesBlockIdResponse res = new openapisdk.models.operations.DeleteSetupV1ResourcesBlockIdResponse() {{
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
     * deleteSetupV1ResourcesId - Deletes a resource object.
     *
     * Use this endpoint to delete a resource. The resource is not permanently deleted and can be recovered.
    **/
    public openapisdk.models.operations.DeleteSetupV1ResourcesIdResponse deleteSetupV1ResourcesId(openapisdk.models.operations.DeleteSetupV1ResourcesIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/resources/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSetupV1ResourcesIdResponse res = new openapisdk.models.operations.DeleteSetupV1ResourcesIdResponse() {{
            resourceViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResourceViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResourceViewModel.class);
                res.resourceViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteSetupV1ResourcesIdDeleteimage - Removes a resource image
     *
     * Use this endpoint to delete a previously uploaded resource image.
    **/
    public openapisdk.models.operations.DeleteSetupV1ResourcesIdDeleteimageResponse deleteSetupV1ResourcesIdDeleteimage(openapisdk.models.operations.DeleteSetupV1ResourcesIdDeleteimageRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/resources/{id}/deleteimage", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSetupV1ResourcesIdDeleteimageResponse res = new openapisdk.models.operations.DeleteSetupV1ResourcesIdDeleteimageResponse() {{
            resourceViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResourceViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResourceViewModel.class);
                res.resourceViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteSetupV1ResourcesIdServices - Deletes resource services from the specified resource
     *
     * Use this endpoint to delete all resource services for a resource
    **/
    public openapisdk.models.operations.DeleteSetupV1ResourcesIdServicesResponse deleteSetupV1ResourcesIdServices(openapisdk.models.operations.DeleteSetupV1ResourcesIdServicesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/resources/{id}/services", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSetupV1ResourcesIdServicesResponse res = new openapisdk.models.operations.DeleteSetupV1ResourcesIdServicesResponse() {{
            resourceViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResourceViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResourceViewModel.class);
                res.resourceViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSetupV1Resources - Returns a list of resources.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    public openapisdk.models.operations.GetSetupV1ResourcesResponse getSetupV1Resources(openapisdk.models.operations.GetSetupV1ResourcesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/resources");
        
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

        openapisdk.models.operations.GetSetupV1ResourcesResponse res = new openapisdk.models.operations.GetSetupV1ResourcesResponse() {{
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
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
	
    /**
     * getSetupV1ResourcesAllocationsId - Update a resource allocation
    **/
    public openapisdk.models.operations.GetSetupV1ResourcesAllocationsIdResponse getSetupV1ResourcesAllocationsId(openapisdk.models.operations.GetSetupV1ResourcesAllocationsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/resources/allocations/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSetupV1ResourcesAllocationsIdResponse res = new openapisdk.models.operations.GetSetupV1ResourcesAllocationsIdResponse() {{
            resourceAllocationViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResourceAllocationViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResourceAllocationViewModel.class);
                res.resourceAllocationViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSetupV1ResourcesBlocksId - Update a resource block
    **/
    public openapisdk.models.operations.GetSetupV1ResourcesBlocksIdResponse getSetupV1ResourcesBlocksId(openapisdk.models.operations.GetSetupV1ResourcesBlocksIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/resources/blocks/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSetupV1ResourcesBlocksIdResponse res = new openapisdk.models.operations.GetSetupV1ResourcesBlocksIdResponse() {{
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
	
	
    public openapisdk.models.operations.GetSetupV1ResourcesTimezonesResponse getSetupV1ResourcesTimezones() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/resources/timezones");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSetupV1ResourcesTimezonesResponse res = new openapisdk.models.operations.GetSetupV1ResourcesTimezonesResponse() {{
            systemTimezoneViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SystemTimezoneViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SystemTimezoneViewModel.class);
                res.systemTimezoneViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSetupV1ResourcesId - Returns a resource object.
     *
     * The result returned is a single resource object. An id is required to find the resource. Find customer id's using either the GET consumer/v1/resources end point,
     * or the GET consumer/v1/appointments end point.
    **/
    public openapisdk.models.operations.GetSetupV1ResourcesIdResponse getSetupV1ResourcesId(openapisdk.models.operations.GetSetupV1ResourcesIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/resources/{id}", request.pathParams);
        
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

        openapisdk.models.operations.GetSetupV1ResourcesIdResponse res = new openapisdk.models.operations.GetSetupV1ResourcesIdResponse() {{
            resourceViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResourceViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResourceViewModel.class);
                res.resourceViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSetupV1ResourcesIdAllocations - Returns a list of resource allocations.
     *
     * Resource allocations allow you to specify explicitly the times you are available as opposed to 
     * generating resource availability from the times that are not unavailable.
     * 
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    public openapisdk.models.operations.GetSetupV1ResourcesIdAllocationsResponse getSetupV1ResourcesIdAllocations(openapisdk.models.operations.GetSetupV1ResourcesIdAllocationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/resources/{id}/allocations", request.pathParams);
        
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

        openapisdk.models.operations.GetSetupV1ResourcesIdAllocationsResponse res = new openapisdk.models.operations.GetSetupV1ResourcesIdAllocationsResponse() {{
            resourceAllocationListViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.resourceAllocationListViewModel = out;
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
     * getSetupV1ResourcesIdAvailability - Returns a list of weekly availability
     *
     * Use this endpoint to get weekly availability for a resource. The displayed
     * available times represent the resource timezone. The resource timezone can
     * be set to any world timezone. By default it is set to the Business timezone.
    **/
    public openapisdk.models.operations.GetSetupV1ResourcesIdAvailabilityResponse getSetupV1ResourcesIdAvailability(openapisdk.models.operations.GetSetupV1ResourcesIdAvailabilityRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/resources/{id}/availability", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSetupV1ResourcesIdAvailabilityResponse res = new openapisdk.models.operations.GetSetupV1ResourcesIdAvailabilityResponse() {{
            resourceAvailabilityViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResourceAvailabilityViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResourceAvailabilityViewModel.class);
                res.resourceAvailabilityViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSetupV1ResourcesIdBlocks - Returns a list of resource blocks.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    public openapisdk.models.operations.GetSetupV1ResourcesIdBlocksResponse getSetupV1ResourcesIdBlocks(openapisdk.models.operations.GetSetupV1ResourcesIdBlocksRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/resources/{id}/blocks", request.pathParams);
        
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

        openapisdk.models.operations.GetSetupV1ResourcesIdBlocksResponse res = new openapisdk.models.operations.GetSetupV1ResourcesIdBlocksResponse() {{
            resourceBlockListViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.resourceBlockListViewModel = out;
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
     * getSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddress - Returns a resource object.
     *
     * The result returned contains the google calendar authorization url
    **/
    public openapisdk.models.operations.GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressResponse getSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddress(openapisdk.models.operations.GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/resources/{id}/calendar/auth/google/{googleEmailAddress}", request.pathParams);
        
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

        openapisdk.models.operations.GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressResponse res = new openapisdk.models.operations.GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressResponse() {{
            calendarAuthViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CalendarAuthViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CalendarAuthViewModel.class);
                res.calendarAuthViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddress - Returns a resource object.
     *
     * The result returned contains the outlook calendar authorization url
    **/
    public openapisdk.models.operations.GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressResponse getSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddress(openapisdk.models.operations.GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/resources/{id}/calendar/auth/outlook/{outlookEmailAddress}", request.pathParams);
        
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

        openapisdk.models.operations.GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressResponse res = new openapisdk.models.operations.GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressResponse() {{
            calendarAuthViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CalendarAuthViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CalendarAuthViewModel.class);
                res.calendarAuthViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * postSetupV1Resources - Creates a new resource object.
     *
     * Use this endpoint to create a new resource. If not specified, the business location id defaults to the first location in the company.<br /><br /> 
     * Email Address and a Name are required for creating a new resource. <br /><br />
     * Passing in a single or many serviceId(s) in the service array will result in those service(s) being associated with the resource, 
     * while passing in an empty array will result in all services being selected. This includes company and business scoped services. <br /><br />
    **/
    public openapisdk.models.operations.PostSetupV1ResourcesResponse postSetupV1Resources(openapisdk.models.operations.PostSetupV1ResourcesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/resources");
        
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

        openapisdk.models.operations.PostSetupV1ResourcesResponse res = new openapisdk.models.operations.PostSetupV1ResourcesResponse() {{
            resourceViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResourceViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResourceViewModel.class);
                res.resourceViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * postSetupV1ResourcesBulk - Creates new resource objects.
     *
     * Use this endpoint to create new resources. If not specified the business location id defaults to the first location in the company.<br /><br />
     * Email Address and a Name are required for creating each new resource.<br /><br />
     * Passing in a single or many serviceId(s) in the service array will result in those service(s) being associated with the resources,
     * while passing in an empty array will result in all services being selected. This includes company and business scoped services.<br /><br />
    **/
    public openapisdk.models.operations.PostSetupV1ResourcesBulkResponse postSetupV1ResourcesBulk(openapisdk.models.operations.PostSetupV1ResourcesBulkRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/resources/bulk");
        
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

        openapisdk.models.operations.PostSetupV1ResourcesBulkResponse res = new openapisdk.models.operations.PostSetupV1ResourcesBulkResponse() {{
            resourceViewModels = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResourceViewModel[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResourceViewModel[].class);
                res.resourceViewModels = out;
            }
        }

        return res;
    }
	
	
    /**
     * postSetupV1ResourcesIdAllocations - Create a new resource allocation
     *
     * Creates a new resource allocation. You must specify a StartDateTime and EndDateTime.
     * A reason for the block is optional. This reason will display in the OnSched Portal Calendar.
     * 
     * Resource allocations can be set to specific time ranges or for the whole day. 
     * 
     * Resource allocations can repeat for a specific date range instance or set to repeat at a specified frequency.
     * The frequency can be set to a value of D,W,M,Y for Day, Week, Month, or Year respecitively. 
     * 
     * Daily allocations will repeat for each day of the week for the date range specified.
     * 
     * Weekly allocations will repeat only on the specified days of the week for the date range specified. For a weekly block
     * you must also specify the weekdays. Weekdays are expressed as a string of digits with each single digit in the string representing a day
     * of the week. The possible values are 0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wed, 4=Thursday, 5=Friday, 6=Saturday.
     * For example a repeat weekly entry with weekdays 24 repeats each week on Tuesday and Thursday.
     * 
     * Use the interval property to specify the interval that the allocation repeats. For example an interval of 2 for a weekly allocation means that
     * the allocation will repeat every second week beginning at the day specified. A daily allocation with an interval of 10 means the allocation will
     * repeat every 10 days. The interval property applies to all repeat frequencies.
     * 
     * Monthly allocations repeat either on the day of the month specified in the month day property or on the day of the week and week of the month specified by
     * the start date. For example, repeat every 3rd friday of each month, repeat on the 21st day of the month.
     * 
     * Repeat allocations will end on the date specified by the end date. You can specify 9999-12-31 in 
     * the EndDate field to indicate the repeating block should continue indefinitely.
    **/
    public openapisdk.models.operations.PostSetupV1ResourcesIdAllocationsResponse postSetupV1ResourcesIdAllocations(openapisdk.models.operations.PostSetupV1ResourcesIdAllocationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/resources/{id}/allocations", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostSetupV1ResourcesIdAllocationsResponse res = new openapisdk.models.operations.PostSetupV1ResourcesIdAllocationsResponse() {{
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
     * postSetupV1ResourcesIdBlock - Create a new resource block
     *
     * Creates a new resource block. You must specify a StartDateTime and EndDateTime.
     * A reason for the block is also required. This reason will display in the OnSched Portal Calendar.
     * 
     * Resource blocks can be set to specific time ranges or for the whole day. Use the AllDay setting to create an all day block.
     * 
     * Resource blocks can be for a specific date range instance or set to repeat at a specified frequency.
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
    public openapisdk.models.operations.PostSetupV1ResourcesIdBlockResponse postSetupV1ResourcesIdBlock(openapisdk.models.operations.PostSetupV1ResourcesIdBlockRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/resources/{id}/block", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostSetupV1ResourcesIdBlockResponse res = new openapisdk.models.operations.PostSetupV1ResourcesIdBlockResponse() {{
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
     * postSetupV1ResourcesIdServices - Adds resource services to the specified resource
     *
     * Use this endpoint to add resource services
    **/
    public openapisdk.models.operations.PostSetupV1ResourcesIdServicesResponse postSetupV1ResourcesIdServices(openapisdk.models.operations.PostSetupV1ResourcesIdServicesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/resources/{id}/services", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostSetupV1ResourcesIdServicesResponse res = new openapisdk.models.operations.PostSetupV1ResourcesIdServicesResponse() {{
            resourceViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResourceViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResourceViewModel.class);
                res.resourceViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * postSetupV1ResourcesIdUploadimage - Uploads a resource image
     *
     * Use this endpoint to upload a resource image. You must convert the image to a base64 encoded string
     * and pass that string as input along with your filename.
    **/
    public openapisdk.models.operations.PostSetupV1ResourcesIdUploadimageResponse postSetupV1ResourcesIdUploadimage(openapisdk.models.operations.PostSetupV1ResourcesIdUploadimageRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/resources/{id}/uploadimage", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostSetupV1ResourcesIdUploadimageResponse res = new openapisdk.models.operations.PostSetupV1ResourcesIdUploadimageResponse() {{
            resourceViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResourceViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResourceViewModel.class);
                res.resourceViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * putSetupV1ResourcesAllocationsId - Update a resource allocation
     *
     * Updates a resource allocation. Refer to the details in the POST resource allocation for setting each of the required parameters.
    **/
    public openapisdk.models.operations.PutSetupV1ResourcesAllocationsIdResponse putSetupV1ResourcesAllocationsId(openapisdk.models.operations.PutSetupV1ResourcesAllocationsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/resources/allocations/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutSetupV1ResourcesAllocationsIdResponse res = new openapisdk.models.operations.PutSetupV1ResourcesAllocationsIdResponse() {{
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
     * putSetupV1ResourcesBlockId - Update a resource block
     *
     * Updates a resource block. Refer to the details in the POST resource block for setting each of the required parameters.
    **/
    public openapisdk.models.operations.PutSetupV1ResourcesBlockIdResponse putSetupV1ResourcesBlockId(openapisdk.models.operations.PutSetupV1ResourcesBlockIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/resources/block/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutSetupV1ResourcesBlockIdResponse res = new openapisdk.models.operations.PutSetupV1ResourcesBlockIdResponse() {{
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
     * putSetupV1ResourcesBulk - Updates resource objects.
     *
     * Use this endpoint to update multiple resources.<br /><br /> 
     * Passing in a single or many serviceId(s) in the service array will result in those service(s) being associated with the each resource, 
     * while passing in an empty array will result in all services being selected. This includes company and business scoped services.<br /><br />
    **/
    public openapisdk.models.operations.PutSetupV1ResourcesBulkResponse putSetupV1ResourcesBulk(openapisdk.models.operations.PutSetupV1ResourcesBulkRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/resources/bulk");
        
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

        openapisdk.models.operations.PutSetupV1ResourcesBulkResponse res = new openapisdk.models.operations.PutSetupV1ResourcesBulkResponse() {{
            resourceViewModels = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResourceViewModel[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResourceViewModel[].class);
                res.resourceViewModels = out;
            }
        }

        return res;
    }
	
	
    /**
     * putSetupV1ResourcesId - Updates a resource object.
     *
     * Use this endpoint to update a resource. <br /><br />
     * Passing in a single or many serviceId(s) in the service array will result in those service(s) being associated with the resource,
     * while passing in an empty array will result in all services being selected. This includes company and business scoped services.<br /><br />
    **/
    public openapisdk.models.operations.PutSetupV1ResourcesIdResponse putSetupV1ResourcesId(openapisdk.models.operations.PutSetupV1ResourcesIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/resources/{id}", request.pathParams);
        
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

        openapisdk.models.operations.PutSetupV1ResourcesIdResponse res = new openapisdk.models.operations.PutSetupV1ResourcesIdResponse() {{
            resourceViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResourceViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResourceViewModel.class);
                res.resourceViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * putSetupV1ResourcesIdAvailability - Updates Weekly Availability
     *
     * Use this endpoint to update resource availability. The Id parameter specifies the resource
     * for which you are updating availability. Availability day entries do not need to be created. 
     * The availbility day entries are created when a resource object is created. They default to
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
     * Times entered represent the
     * timezone of the resource. Resources can belong to any world timezone.
    **/
    public openapisdk.models.operations.PutSetupV1ResourcesIdAvailabilityResponse putSetupV1ResourcesIdAvailability(openapisdk.models.operations.PutSetupV1ResourcesIdAvailabilityRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/resources/{id}/availability", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutSetupV1ResourcesIdAvailabilityResponse res = new openapisdk.models.operations.PutSetupV1ResourcesIdAvailabilityResponse() {{
            resourceAvailabilityViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResourceAvailabilityViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResourceAvailabilityViewModel.class);
                res.resourceAvailabilityViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * putSetupV1ResourcesIdReassignAppointmentsResourceId - Reassigns appointments to another resource
     *
     * Use this endpoint to reassign appointments from one resource to another.
     * If the startDate is not supplied, the default is today's date + 1 day;
     * If the endDate is not supplied, all future appointments from the start date will be reassigned
     * If the calendarId is not supplied the default is the primary calendar of the location.
    **/
    public openapisdk.models.operations.PutSetupV1ResourcesIdReassignAppointmentsResourceIdResponse putSetupV1ResourcesIdReassignAppointmentsResourceId(openapisdk.models.operations.PutSetupV1ResourcesIdReassignAppointmentsResourceIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/resources/{id}/reassign/appointments/{resourceId}", request.pathParams);
        
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

        openapisdk.models.operations.PutSetupV1ResourcesIdReassignAppointmentsResourceIdResponse res = new openapisdk.models.operations.PutSetupV1ResourcesIdReassignAppointmentsResourceIdResponse() {{
            appointmentViewModels = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AppointmentViewModel[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AppointmentViewModel[].class);
                res.appointmentViewModels = out;
            }
        }

        return res;
    }
	
	
    /**
     * putSetupV1ResourcesIdRecover - Recovers a resource object.
     *
     * Use this endpoint to recover a deleted resource.
    **/
    public openapisdk.models.operations.PutSetupV1ResourcesIdRecoverResponse putSetupV1ResourcesIdRecover(openapisdk.models.operations.PutSetupV1ResourcesIdRecoverRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/resources/{id}/recover", request.pathParams);
        
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

        openapisdk.models.operations.PutSetupV1ResourcesIdRecoverResponse res = new openapisdk.models.operations.PutSetupV1ResourcesIdRecoverResponse() {{
            resourceViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResourceViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResourceViewModel.class);
                res.resourceViewModel = out;
            }
        }

        return res;
    }
	
}