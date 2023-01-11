package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Projects {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Projects(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * tpuProjectsLocationsAcceleratorTypesList - Lists accelerator types supported by this API.
    **/
    public openapisdk.models.operations.TpuProjectsLocationsAcceleratorTypesListResponse tpuProjectsLocationsAcceleratorTypesList(openapisdk.models.operations.TpuProjectsLocationsAcceleratorTypesListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1alpha1/{parent}/acceleratorTypes", request.pathParams);
        
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

        openapisdk.models.operations.TpuProjectsLocationsAcceleratorTypesListResponse res = new openapisdk.models.operations.TpuProjectsLocationsAcceleratorTypesListResponse() {{
            listAcceleratorTypesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListAcceleratorTypesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListAcceleratorTypesResponse.class);
                res.listAcceleratorTypesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * tpuProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    public openapisdk.models.operations.TpuProjectsLocationsListResponse tpuProjectsLocationsList(openapisdk.models.operations.TpuProjectsLocationsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1alpha1/{name}/locations", request.pathParams);
        
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

        openapisdk.models.operations.TpuProjectsLocationsListResponse res = new openapisdk.models.operations.TpuProjectsLocationsListResponse() {{
            listLocationsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListLocationsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListLocationsResponse.class);
                res.listLocationsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * tpuProjectsLocationsNodesCreate - Creates a node.
    **/
    public openapisdk.models.operations.TpuProjectsLocationsNodesCreateResponse tpuProjectsLocationsNodesCreate(openapisdk.models.operations.TpuProjectsLocationsNodesCreateRequest request) throws Exception {
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

        openapisdk.models.operations.TpuProjectsLocationsNodesCreateResponse res = new openapisdk.models.operations.TpuProjectsLocationsNodesCreateResponse() {{
            operation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Operation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Operation.class);
                res.operation = out;
            }
        }

        return res;
    }
	
	
    /**
     * tpuProjectsLocationsNodesList - Lists nodes.
    **/
    public openapisdk.models.operations.TpuProjectsLocationsNodesListResponse tpuProjectsLocationsNodesList(openapisdk.models.operations.TpuProjectsLocationsNodesListRequest request) throws Exception {
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

        openapisdk.models.operations.TpuProjectsLocationsNodesListResponse res = new openapisdk.models.operations.TpuProjectsLocationsNodesListResponse() {{
            listNodesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListNodesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListNodesResponse.class);
                res.listNodesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * tpuProjectsLocationsNodesReimage - Reimages a node's OS.
    **/
    public openapisdk.models.operations.TpuProjectsLocationsNodesReimageResponse tpuProjectsLocationsNodesReimage(openapisdk.models.operations.TpuProjectsLocationsNodesReimageRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1alpha1/{name}:reimage", request.pathParams);
        
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

        openapisdk.models.operations.TpuProjectsLocationsNodesReimageResponse res = new openapisdk.models.operations.TpuProjectsLocationsNodesReimageResponse() {{
            operation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Operation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Operation.class);
                res.operation = out;
            }
        }

        return res;
    }
	
	
    /**
     * tpuProjectsLocationsNodesStart - Starts a node.
    **/
    public openapisdk.models.operations.TpuProjectsLocationsNodesStartResponse tpuProjectsLocationsNodesStart(openapisdk.models.operations.TpuProjectsLocationsNodesStartRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1alpha1/{name}:start", request.pathParams);
        
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

        openapisdk.models.operations.TpuProjectsLocationsNodesStartResponse res = new openapisdk.models.operations.TpuProjectsLocationsNodesStartResponse() {{
            operation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Operation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Operation.class);
                res.operation = out;
            }
        }

        return res;
    }
	
	
    /**
     * tpuProjectsLocationsNodesStop - Stops a node. This operation is only available with single TPU nodes.
    **/
    public openapisdk.models.operations.TpuProjectsLocationsNodesStopResponse tpuProjectsLocationsNodesStop(openapisdk.models.operations.TpuProjectsLocationsNodesStopRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1alpha1/{name}:stop", request.pathParams);
        
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

        openapisdk.models.operations.TpuProjectsLocationsNodesStopResponse res = new openapisdk.models.operations.TpuProjectsLocationsNodesStopResponse() {{
            operation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Operation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Operation.class);
                res.operation = out;
            }
        }

        return res;
    }
	
	
    /**
     * tpuProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    public openapisdk.models.operations.TpuProjectsLocationsOperationsCancelResponse tpuProjectsLocationsOperationsCancel(openapisdk.models.operations.TpuProjectsLocationsOperationsCancelRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1alpha1/{name}:cancel", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
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

        openapisdk.models.operations.TpuProjectsLocationsOperationsCancelResponse res = new openapisdk.models.operations.TpuProjectsLocationsOperationsCancelResponse() {{
            empty = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.empty = out;
            }
        }

        return res;
    }
	
	
    /**
     * tpuProjectsLocationsOperationsDelete - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
    **/
    public openapisdk.models.operations.TpuProjectsLocationsOperationsDeleteResponse tpuProjectsLocationsOperationsDelete(openapisdk.models.operations.TpuProjectsLocationsOperationsDeleteRequest request) throws Exception {
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

        openapisdk.models.operations.TpuProjectsLocationsOperationsDeleteResponse res = new openapisdk.models.operations.TpuProjectsLocationsOperationsDeleteResponse() {{
            empty = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.empty = out;
            }
        }

        return res;
    }
	
	
    /**
     * tpuProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    public openapisdk.models.operations.TpuProjectsLocationsOperationsListResponse tpuProjectsLocationsOperationsList(openapisdk.models.operations.TpuProjectsLocationsOperationsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1alpha1/{name}/operations", request.pathParams);
        
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

        openapisdk.models.operations.TpuProjectsLocationsOperationsListResponse res = new openapisdk.models.operations.TpuProjectsLocationsOperationsListResponse() {{
            listOperationsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListOperationsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListOperationsResponse.class);
                res.listOperationsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * tpuProjectsLocationsTensorflowVersionsGet - Gets TensorFlow Version.
    **/
    public openapisdk.models.operations.TpuProjectsLocationsTensorflowVersionsGetResponse tpuProjectsLocationsTensorflowVersionsGet(openapisdk.models.operations.TpuProjectsLocationsTensorflowVersionsGetRequest request) throws Exception {
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

        openapisdk.models.operations.TpuProjectsLocationsTensorflowVersionsGetResponse res = new openapisdk.models.operations.TpuProjectsLocationsTensorflowVersionsGetResponse() {{
            tensorFlowVersion = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TensorFlowVersion out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TensorFlowVersion.class);
                res.tensorFlowVersion = out;
            }
        }

        return res;
    }
	
	
    /**
     * tpuProjectsLocationsTensorflowVersionsList - Lists TensorFlow versions supported by this API.
    **/
    public openapisdk.models.operations.TpuProjectsLocationsTensorflowVersionsListResponse tpuProjectsLocationsTensorflowVersionsList(openapisdk.models.operations.TpuProjectsLocationsTensorflowVersionsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1alpha1/{parent}/tensorflowVersions", request.pathParams);
        
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

        openapisdk.models.operations.TpuProjectsLocationsTensorflowVersionsListResponse res = new openapisdk.models.operations.TpuProjectsLocationsTensorflowVersionsListResponse() {{
            listTensorFlowVersionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListTensorFlowVersionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListTensorFlowVersionsResponse.class);
                res.listTensorFlowVersionsResponse = out;
            }
        }

        return res;
    }
	
}