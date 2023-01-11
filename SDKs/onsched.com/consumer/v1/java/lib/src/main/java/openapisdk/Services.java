package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
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
     * getConsumerV1Services - Returns a list of services.
     *
     * Use this endpoint to get services available at your business location and/or company. If no locationId is provided the primary company will be queried. 
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size.
     * Default offset is <b>0</b>, and limit is <b>20</b>. Use the other query parameters to optionally filter the results list.
    **/
    public openapisdk.models.operations.GetConsumerV1ServicesResponse getConsumerV1Services(openapisdk.models.operations.GetConsumerV1ServicesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/services");
        
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

        openapisdk.models.operations.GetConsumerV1ServicesResponse res = new openapisdk.models.operations.GetConsumerV1ServicesResponse() {{
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
     * getConsumerV1ServicesAllocationsId - Get a service allocation
    **/
    public openapisdk.models.operations.GetConsumerV1ServicesAllocationsIdResponse getConsumerV1ServicesAllocationsId(openapisdk.models.operations.GetConsumerV1ServicesAllocationsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/services/allocations/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetConsumerV1ServicesAllocationsIdResponse res = new openapisdk.models.operations.GetConsumerV1ServicesAllocationsIdResponse() {{
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
     * getConsumerV1ServicesId - Returns a service object.
     *
     * The result returned is a single service object. An id is required to find the service. Find service id's using either the GET consumer/v1/service end point,
     * or the GET consumer/v1/appointments end point.
    **/
    public openapisdk.models.operations.GetConsumerV1ServicesIdResponse getConsumerV1ServicesId(openapisdk.models.operations.GetConsumerV1ServicesIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/services/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetConsumerV1ServicesIdResponse res = new openapisdk.models.operations.GetConsumerV1ServicesIdResponse() {{
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
     * getConsumerV1ServicesIdAllocations - Returns a list of service allocations.
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
    public openapisdk.models.operations.GetConsumerV1ServicesIdAllocationsResponse getConsumerV1ServicesIdAllocations(openapisdk.models.operations.GetConsumerV1ServicesIdAllocationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/services/{id}/allocations", request.pathParams);
        
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

        openapisdk.models.operations.GetConsumerV1ServicesIdAllocationsResponse res = new openapisdk.models.operations.GetConsumerV1ServicesIdAllocationsResponse() {{
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
     * getConsumerV1ServicesIdResources - Returns a list of resources.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    public openapisdk.models.operations.GetConsumerV1ServicesIdResourcesResponse getConsumerV1ServicesIdResources(openapisdk.models.operations.GetConsumerV1ServicesIdResourcesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/services/{id}/resources", request.pathParams);
        
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

        openapisdk.models.operations.GetConsumerV1ServicesIdResourcesResponse res = new openapisdk.models.operations.GetConsumerV1ServicesIdResourcesResponse() {{
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
	
}