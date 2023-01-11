package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class GuaranteedOrders {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public GuaranteedOrders(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * displayvideoGuaranteedOrdersCreate - Creates a new guaranteed order. Returns the newly created guaranteed order if successful.
    **/
    public openapisdk.models.operations.DisplayvideoGuaranteedOrdersCreateResponse displayvideoGuaranteedOrdersCreate(openapisdk.models.operations.DisplayvideoGuaranteedOrdersCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/guaranteedOrders");
        
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
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DisplayvideoGuaranteedOrdersCreateResponse res = new openapisdk.models.operations.DisplayvideoGuaranteedOrdersCreateResponse() {{
            guaranteedOrder = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GuaranteedOrder out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GuaranteedOrder.class);
                res.guaranteedOrder = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessors - Edits read advertisers of a guaranteed order.
    **/
    public openapisdk.models.operations.DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsResponse displayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessors(openapisdk.models.operations.DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/guaranteedOrders/{guaranteedOrderId}:editGuaranteedOrderReadAccessors", request.pathParams);
        
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
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsResponse res = new openapisdk.models.operations.DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsResponse() {{
            editGuaranteedOrderReadAccessorsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.EditGuaranteedOrderReadAccessorsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.EditGuaranteedOrderReadAccessorsResponse.class);
                res.editGuaranteedOrderReadAccessorsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoGuaranteedOrdersGet - Gets a guaranteed order.
    **/
    public openapisdk.models.operations.DisplayvideoGuaranteedOrdersGetResponse displayvideoGuaranteedOrdersGet(openapisdk.models.operations.DisplayvideoGuaranteedOrdersGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/guaranteedOrders/{guaranteedOrderId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DisplayvideoGuaranteedOrdersGetResponse res = new openapisdk.models.operations.DisplayvideoGuaranteedOrdersGetResponse() {{
            guaranteedOrder = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GuaranteedOrder out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GuaranteedOrder.class);
                res.guaranteedOrder = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoGuaranteedOrdersList - Lists guaranteed orders that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, guaranteed orders with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.
    **/
    public openapisdk.models.operations.DisplayvideoGuaranteedOrdersListResponse displayvideoGuaranteedOrdersList(openapisdk.models.operations.DisplayvideoGuaranteedOrdersListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/guaranteedOrders");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DisplayvideoGuaranteedOrdersListResponse res = new openapisdk.models.operations.DisplayvideoGuaranteedOrdersListResponse() {{
            listGuaranteedOrdersResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListGuaranteedOrdersResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListGuaranteedOrdersResponse.class);
                res.listGuaranteedOrdersResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoGuaranteedOrdersPatch - Updates an existing guaranteed order. Returns the updated guaranteed order if successful.
    **/
    public openapisdk.models.operations.DisplayvideoGuaranteedOrdersPatchResponse displayvideoGuaranteedOrdersPatch(openapisdk.models.operations.DisplayvideoGuaranteedOrdersPatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/guaranteedOrders/{guaranteedOrderId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DisplayvideoGuaranteedOrdersPatchResponse res = new openapisdk.models.operations.DisplayvideoGuaranteedOrdersPatchResponse() {{
            guaranteedOrder = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GuaranteedOrder out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GuaranteedOrder.class);
                res.guaranteedOrder = out;
            }
        }

        return res;
    }
	
}