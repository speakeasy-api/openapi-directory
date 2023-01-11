package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class CustomBiddingAlgorithms {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public CustomBiddingAlgorithms(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * displayvideoCustomBiddingAlgorithmsCreate - Creates a new custom bidding algorithm. Returns the newly created custom bidding algorithm if successful.
    **/
    public openapisdk.models.operations.DisplayvideoCustomBiddingAlgorithmsCreateResponse displayvideoCustomBiddingAlgorithmsCreate(openapisdk.models.operations.DisplayvideoCustomBiddingAlgorithmsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/customBiddingAlgorithms");
        
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

        openapisdk.models.operations.DisplayvideoCustomBiddingAlgorithmsCreateResponse res = new openapisdk.models.operations.DisplayvideoCustomBiddingAlgorithmsCreateResponse() {{
            customBiddingAlgorithm = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CustomBiddingAlgorithm out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CustomBiddingAlgorithm.class);
                res.customBiddingAlgorithm = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoCustomBiddingAlgorithmsGet - Gets a custom bidding algorithm.
    **/
    public openapisdk.models.operations.DisplayvideoCustomBiddingAlgorithmsGetResponse displayvideoCustomBiddingAlgorithmsGet(openapisdk.models.operations.DisplayvideoCustomBiddingAlgorithmsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/customBiddingAlgorithms/{customBiddingAlgorithmId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoCustomBiddingAlgorithmsGetResponse res = new openapisdk.models.operations.DisplayvideoCustomBiddingAlgorithmsGetResponse() {{
            customBiddingAlgorithm = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CustomBiddingAlgorithm out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CustomBiddingAlgorithm.class);
                res.customBiddingAlgorithm = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoCustomBiddingAlgorithmsList - Lists custom bidding algorithms that are accessible to the current user and can be used in bidding stratgies. The order is defined by the order_by parameter.
    **/
    public openapisdk.models.operations.DisplayvideoCustomBiddingAlgorithmsListResponse displayvideoCustomBiddingAlgorithmsList(openapisdk.models.operations.DisplayvideoCustomBiddingAlgorithmsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/customBiddingAlgorithms");
        
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

        openapisdk.models.operations.DisplayvideoCustomBiddingAlgorithmsListResponse res = new openapisdk.models.operations.DisplayvideoCustomBiddingAlgorithmsListResponse() {{
            listCustomBiddingAlgorithmsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListCustomBiddingAlgorithmsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListCustomBiddingAlgorithmsResponse.class);
                res.listCustomBiddingAlgorithmsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoCustomBiddingAlgorithmsPatch - Updates an existing custom bidding algorithm. Returns the updated custom bidding algorithm if successful.
    **/
    public openapisdk.models.operations.DisplayvideoCustomBiddingAlgorithmsPatchResponse displayvideoCustomBiddingAlgorithmsPatch(openapisdk.models.operations.DisplayvideoCustomBiddingAlgorithmsPatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/customBiddingAlgorithms/{customBiddingAlgorithmId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoCustomBiddingAlgorithmsPatchResponse res = new openapisdk.models.operations.DisplayvideoCustomBiddingAlgorithmsPatchResponse() {{
            customBiddingAlgorithm = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CustomBiddingAlgorithm out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CustomBiddingAlgorithm.class);
                res.customBiddingAlgorithm = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoCustomBiddingAlgorithmsScriptsCreate - Creates a new custom bidding script. Returns the newly created script if successful.
    **/
    public openapisdk.models.operations.DisplayvideoCustomBiddingAlgorithmsScriptsCreateResponse displayvideoCustomBiddingAlgorithmsScriptsCreate(openapisdk.models.operations.DisplayvideoCustomBiddingAlgorithmsScriptsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/customBiddingAlgorithms/{customBiddingAlgorithmId}/scripts", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoCustomBiddingAlgorithmsScriptsCreateResponse res = new openapisdk.models.operations.DisplayvideoCustomBiddingAlgorithmsScriptsCreateResponse() {{
            customBiddingScript = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CustomBiddingScript out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CustomBiddingScript.class);
                res.customBiddingScript = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoCustomBiddingAlgorithmsScriptsGet - Gets a custom bidding script.
    **/
    public openapisdk.models.operations.DisplayvideoCustomBiddingAlgorithmsScriptsGetResponse displayvideoCustomBiddingAlgorithmsScriptsGet(openapisdk.models.operations.DisplayvideoCustomBiddingAlgorithmsScriptsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/customBiddingAlgorithms/{customBiddingAlgorithmId}/scripts/{customBiddingScriptId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoCustomBiddingAlgorithmsScriptsGetResponse res = new openapisdk.models.operations.DisplayvideoCustomBiddingAlgorithmsScriptsGetResponse() {{
            customBiddingScript = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CustomBiddingScript out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CustomBiddingScript.class);
                res.customBiddingScript = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoCustomBiddingAlgorithmsScriptsList - Lists custom bidding scripts that belong to the given algorithm. The order is defined by the order_by parameter.
    **/
    public openapisdk.models.operations.DisplayvideoCustomBiddingAlgorithmsScriptsListResponse displayvideoCustomBiddingAlgorithmsScriptsList(openapisdk.models.operations.DisplayvideoCustomBiddingAlgorithmsScriptsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/customBiddingAlgorithms/{customBiddingAlgorithmId}/scripts", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoCustomBiddingAlgorithmsScriptsListResponse res = new openapisdk.models.operations.DisplayvideoCustomBiddingAlgorithmsScriptsListResponse() {{
            listCustomBiddingScriptsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListCustomBiddingScriptsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListCustomBiddingScriptsResponse.class);
                res.listCustomBiddingScriptsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoCustomBiddingAlgorithmsUploadScript - Creates a custom bidding script reference object for a script file. The resulting reference object provides a resource path to which the script file should be uploaded. This reference object should be included in when creating a new custom bidding script object.
    **/
    public openapisdk.models.operations.DisplayvideoCustomBiddingAlgorithmsUploadScriptResponse displayvideoCustomBiddingAlgorithmsUploadScript(openapisdk.models.operations.DisplayvideoCustomBiddingAlgorithmsUploadScriptRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/customBiddingAlgorithms/{customBiddingAlgorithmId}:uploadScript", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoCustomBiddingAlgorithmsUploadScriptResponse res = new openapisdk.models.operations.DisplayvideoCustomBiddingAlgorithmsUploadScriptResponse() {{
            customBiddingScriptRef = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CustomBiddingScriptRef out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CustomBiddingScriptRef.class);
                res.customBiddingScriptRef = out;
            }
        }

        return res;
    }
	
}