package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
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
     * servicebrokerProjectsBrokersCreate - CreateBroker creates a Broker.
    **/
    public openapisdk.models.operations.ServicebrokerProjectsBrokersCreateResponse servicebrokerProjectsBrokersCreate(openapisdk.models.operations.ServicebrokerProjectsBrokersCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{parent}/brokers", request.pathParams);
        
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

        openapisdk.models.operations.ServicebrokerProjectsBrokersCreateResponse res = new openapisdk.models.operations.ServicebrokerProjectsBrokersCreateResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * servicebrokerProjectsBrokersInstancesBindingsList - Lists all the bindings in the instance.
    **/
    public openapisdk.models.operations.ServicebrokerProjectsBrokersInstancesBindingsListResponse servicebrokerProjectsBrokersInstancesBindingsList(openapisdk.models.operations.ServicebrokerProjectsBrokersInstancesBindingsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{parent}/bindings", request.pathParams);
        
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

        openapisdk.models.operations.ServicebrokerProjectsBrokersInstancesBindingsListResponse res = new openapisdk.models.operations.ServicebrokerProjectsBrokersInstancesBindingsListResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * servicebrokerProjectsBrokersInstancesList - Lists all the instances in the brokers
     * This API is an extension and not part of the OSB spec.
     * Hence the path is a standard Google API URL.
    **/
    public openapisdk.models.operations.ServicebrokerProjectsBrokersInstancesListResponse servicebrokerProjectsBrokersInstancesList(openapisdk.models.operations.ServicebrokerProjectsBrokersInstancesListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{parent}/instances", request.pathParams);
        
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

        openapisdk.models.operations.ServicebrokerProjectsBrokersInstancesListResponse res = new openapisdk.models.operations.ServicebrokerProjectsBrokersInstancesListResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * servicebrokerProjectsBrokersList - ListBrokers lists brokers.
    **/
    public openapisdk.models.operations.ServicebrokerProjectsBrokersListResponse servicebrokerProjectsBrokersList(openapisdk.models.operations.ServicebrokerProjectsBrokersListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{parent}/brokers", request.pathParams);
        
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

        openapisdk.models.operations.ServicebrokerProjectsBrokersListResponse res = new openapisdk.models.operations.ServicebrokerProjectsBrokersListResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * servicebrokerProjectsBrokersV2CatalogList - Lists all the Services registered with this broker for consumption for
     * given service registry broker, which contains an set of services.
     * Note, that Service producer API is separate from Broker API.
    **/
    public openapisdk.models.operations.ServicebrokerProjectsBrokersV2CatalogListResponse servicebrokerProjectsBrokersV2CatalogList(openapisdk.models.operations.ServicebrokerProjectsBrokersV2CatalogListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{parent}/v2/catalog", request.pathParams);
        
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

        openapisdk.models.operations.ServicebrokerProjectsBrokersV2CatalogListResponse res = new openapisdk.models.operations.ServicebrokerProjectsBrokersV2CatalogListResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * servicebrokerProjectsBrokersV2ServiceInstancesCreate - Provisions a service instance.
     * If `request.accepts_incomplete` is false and Broker cannot execute request
     * synchronously HTTP 422 error will be returned along with
     * FAILED_PRECONDITION status.
     * If `request.accepts_incomplete` is true and the Broker decides to execute
     * resource asynchronously then HTTP 202 response code will be returned and a
     * valid polling operation in the response will be included.
     * If Broker executes the request synchronously and it succeeds HTTP 201
     * response will be furnished.
     * If identical instance exists, then HTTP 200 response will be returned.
     * If an instance with identical ID but mismatching parameters exists, then
     * HTTP 409 status code will be returned.
    **/
    public openapisdk.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesCreateResponse servicebrokerProjectsBrokersV2ServiceInstancesCreate(openapisdk.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{parent}/v2/service_instances/{instance_id}", request.pathParams);
        
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
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesCreateResponse res = new openapisdk.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesCreateResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * servicebrokerProjectsBrokersV2ServiceInstancesPatch - Updates an existing service instance.
     * See CreateServiceInstance for possible response codes.
    **/
    public openapisdk.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesPatchResponse servicebrokerProjectsBrokersV2ServiceInstancesPatch(openapisdk.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesPatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{name}", request.pathParams);
        
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

        openapisdk.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesPatchResponse res = new openapisdk.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesPatchResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreate - CreateBinding generates a service binding to an existing service instance.
     * See ProviServiceInstance for async operation details.
    **/
    public openapisdk.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateResponse servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreate(openapisdk.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{parent}/service_bindings/{binding_id}", request.pathParams);
        
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
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateResponse res = new openapisdk.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDelete - Unbinds from a service instance.
     * For synchronous/asynchronous request details see CreateServiceInstance
     * method.
     * If binding does not exist HTTP 410 status will be returned.
    **/
    public openapisdk.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteResponse servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDelete(openapisdk.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{name}", request.pathParams);
        
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

        openapisdk.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteResponse res = new openapisdk.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGet - GetBinding returns the binding information.
    **/
    public openapisdk.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetResponse servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGet(openapisdk.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{name}", request.pathParams);
        
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

        openapisdk.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetResponse res = new openapisdk.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperation - Returns the state of the last operation for the binding.
     * Only last (or current) operation can be polled.
    **/
    public openapisdk.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationResponse servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperation(openapisdk.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{name}/last_operation", request.pathParams);
        
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

        openapisdk.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationResponse res = new openapisdk.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
}