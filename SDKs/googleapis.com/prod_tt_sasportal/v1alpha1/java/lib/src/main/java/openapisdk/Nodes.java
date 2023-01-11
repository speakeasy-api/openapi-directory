package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Nodes {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Nodes(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * prodTtSasportalNodesDevicesSignDevice - Signs a device.
    **/
    public openapisdk.models.operations.ProdTtSasportalNodesDevicesSignDeviceResponse prodTtSasportalNodesDevicesSignDevice(openapisdk.models.operations.ProdTtSasportalNodesDevicesSignDeviceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1alpha1/{name}:signDevice", request.pathParams);
        
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

        openapisdk.models.operations.ProdTtSasportalNodesDevicesSignDeviceResponse res = new openapisdk.models.operations.ProdTtSasportalNodesDevicesSignDeviceResponse() {{
            sasPortalEmpty = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.sasPortalEmpty = out;
            }
        }

        return res;
    }
	
	
    /**
     * prodTtSasportalNodesDevicesUpdateSigned - Updates a signed device.
    **/
    public openapisdk.models.operations.ProdTtSasportalNodesDevicesUpdateSignedResponse prodTtSasportalNodesDevicesUpdateSigned(openapisdk.models.operations.ProdTtSasportalNodesDevicesUpdateSignedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1alpha1/{name}:updateSigned", request.pathParams);
        
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

        openapisdk.models.operations.ProdTtSasportalNodesDevicesUpdateSignedResponse res = new openapisdk.models.operations.ProdTtSasportalNodesDevicesUpdateSignedResponse() {{
            sasPortalDevice = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SasPortalDevice out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SasPortalDevice.class);
                res.sasPortalDevice = out;
            }
        }

        return res;
    }
	
	
    /**
     * prodTtSasportalNodesNodesDelete - Deletes a node.
    **/
    public openapisdk.models.operations.ProdTtSasportalNodesNodesDeleteResponse prodTtSasportalNodesNodesDelete(openapisdk.models.operations.ProdTtSasportalNodesNodesDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1alpha1/{name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
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

        openapisdk.models.operations.ProdTtSasportalNodesNodesDeleteResponse res = new openapisdk.models.operations.ProdTtSasportalNodesNodesDeleteResponse() {{
            sasPortalEmpty = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.sasPortalEmpty = out;
            }
        }

        return res;
    }
	
	
    /**
     * prodTtSasportalNodesNodesDeploymentsCreate - Creates a new deployment.
    **/
    public openapisdk.models.operations.ProdTtSasportalNodesNodesDeploymentsCreateResponse prodTtSasportalNodesNodesDeploymentsCreate(openapisdk.models.operations.ProdTtSasportalNodesNodesDeploymentsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1alpha1/{parent}/deployments", request.pathParams);
        
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

        openapisdk.models.operations.ProdTtSasportalNodesNodesDeploymentsCreateResponse res = new openapisdk.models.operations.ProdTtSasportalNodesNodesDeploymentsCreateResponse() {{
            sasPortalDeployment = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SasPortalDeployment out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SasPortalDeployment.class);
                res.sasPortalDeployment = out;
            }
        }

        return res;
    }
	
	
    /**
     * prodTtSasportalNodesNodesDeploymentsList - Lists deployments.
    **/
    public openapisdk.models.operations.ProdTtSasportalNodesNodesDeploymentsListResponse prodTtSasportalNodesNodesDeploymentsList(openapisdk.models.operations.ProdTtSasportalNodesNodesDeploymentsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1alpha1/{parent}/deployments", request.pathParams);
        
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

        openapisdk.models.operations.ProdTtSasportalNodesNodesDeploymentsListResponse res = new openapisdk.models.operations.ProdTtSasportalNodesNodesDeploymentsListResponse() {{
            sasPortalListDeploymentsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SasPortalListDeploymentsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SasPortalListDeploymentsResponse.class);
                res.sasPortalListDeploymentsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * prodTtSasportalNodesNodesDevicesCreate - Creates a device under a node or customer.
    **/
    public openapisdk.models.operations.ProdTtSasportalNodesNodesDevicesCreateResponse prodTtSasportalNodesNodesDevicesCreate(openapisdk.models.operations.ProdTtSasportalNodesNodesDevicesCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1alpha1/{parent}/devices", request.pathParams);
        
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

        openapisdk.models.operations.ProdTtSasportalNodesNodesDevicesCreateResponse res = new openapisdk.models.operations.ProdTtSasportalNodesNodesDevicesCreateResponse() {{
            sasPortalDevice = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SasPortalDevice out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SasPortalDevice.class);
                res.sasPortalDevice = out;
            }
        }

        return res;
    }
	
	
    /**
     * prodTtSasportalNodesNodesDevicesCreateSigned - Creates a signed device under a node or customer.
    **/
    public openapisdk.models.operations.ProdTtSasportalNodesNodesDevicesCreateSignedResponse prodTtSasportalNodesNodesDevicesCreateSigned(openapisdk.models.operations.ProdTtSasportalNodesNodesDevicesCreateSignedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1alpha1/{parent}/devices:createSigned", request.pathParams);
        
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

        openapisdk.models.operations.ProdTtSasportalNodesNodesDevicesCreateSignedResponse res = new openapisdk.models.operations.ProdTtSasportalNodesNodesDevicesCreateSignedResponse() {{
            sasPortalDevice = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SasPortalDevice out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SasPortalDevice.class);
                res.sasPortalDevice = out;
            }
        }

        return res;
    }
	
	
    /**
     * prodTtSasportalNodesNodesDevicesList - Lists devices under a node or customer.
    **/
    public openapisdk.models.operations.ProdTtSasportalNodesNodesDevicesListResponse prodTtSasportalNodesNodesDevicesList(openapisdk.models.operations.ProdTtSasportalNodesNodesDevicesListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1alpha1/{parent}/devices", request.pathParams);
        
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

        openapisdk.models.operations.ProdTtSasportalNodesNodesDevicesListResponse res = new openapisdk.models.operations.ProdTtSasportalNodesNodesDevicesListResponse() {{
            sasPortalListDevicesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SasPortalListDevicesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SasPortalListDevicesResponse.class);
                res.sasPortalListDevicesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * prodTtSasportalNodesNodesGet - Returns a requested node.
    **/
    public openapisdk.models.operations.ProdTtSasportalNodesNodesGetResponse prodTtSasportalNodesNodesGet(openapisdk.models.operations.ProdTtSasportalNodesNodesGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1alpha1/{name}", request.pathParams);
        
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

        openapisdk.models.operations.ProdTtSasportalNodesNodesGetResponse res = new openapisdk.models.operations.ProdTtSasportalNodesNodesGetResponse() {{
            sasPortalNode = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SasPortalNode out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SasPortalNode.class);
                res.sasPortalNode = out;
            }
        }

        return res;
    }
	
	
    /**
     * prodTtSasportalNodesNodesMove - Moves a node under another node or customer.
    **/
    public openapisdk.models.operations.ProdTtSasportalNodesNodesMoveResponse prodTtSasportalNodesNodesMove(openapisdk.models.operations.ProdTtSasportalNodesNodesMoveRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1alpha1/{name}:move", request.pathParams);
        
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

        openapisdk.models.operations.ProdTtSasportalNodesNodesMoveResponse res = new openapisdk.models.operations.ProdTtSasportalNodesNodesMoveResponse() {{
            sasPortalOperation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SasPortalOperation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SasPortalOperation.class);
                res.sasPortalOperation = out;
            }
        }

        return res;
    }
	
	
    /**
     * prodTtSasportalNodesNodesNodesCreate - Creates a new node.
    **/
    public openapisdk.models.operations.ProdTtSasportalNodesNodesNodesCreateResponse prodTtSasportalNodesNodesNodesCreate(openapisdk.models.operations.ProdTtSasportalNodesNodesNodesCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1alpha1/{parent}/nodes", request.pathParams);
        
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

        openapisdk.models.operations.ProdTtSasportalNodesNodesNodesCreateResponse res = new openapisdk.models.operations.ProdTtSasportalNodesNodesNodesCreateResponse() {{
            sasPortalNode = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SasPortalNode out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SasPortalNode.class);
                res.sasPortalNode = out;
            }
        }

        return res;
    }
	
	
    /**
     * prodTtSasportalNodesNodesNodesList - Lists nodes.
    **/
    public openapisdk.models.operations.ProdTtSasportalNodesNodesNodesListResponse prodTtSasportalNodesNodesNodesList(openapisdk.models.operations.ProdTtSasportalNodesNodesNodesListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1alpha1/{parent}/nodes", request.pathParams);
        
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

        openapisdk.models.operations.ProdTtSasportalNodesNodesNodesListResponse res = new openapisdk.models.operations.ProdTtSasportalNodesNodesNodesListResponse() {{
            sasPortalListNodesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SasPortalListNodesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SasPortalListNodesResponse.class);
                res.sasPortalListNodesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * prodTtSasportalNodesNodesPatch - Updates an existing node.
    **/
    public openapisdk.models.operations.ProdTtSasportalNodesNodesPatchResponse prodTtSasportalNodesNodesPatch(openapisdk.models.operations.ProdTtSasportalNodesNodesPatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1alpha1/{name}", request.pathParams);
        
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

        openapisdk.models.operations.ProdTtSasportalNodesNodesPatchResponse res = new openapisdk.models.operations.ProdTtSasportalNodesNodesPatchResponse() {{
            sasPortalNode = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SasPortalNode out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SasPortalNode.class);
                res.sasPortalNode = out;
            }
        }

        return res;
    }
	
}