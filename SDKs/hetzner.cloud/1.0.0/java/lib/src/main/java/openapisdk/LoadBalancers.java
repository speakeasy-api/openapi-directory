package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class LoadBalancers {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public LoadBalancers(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteLoadBalancersId - Delete a Load Balancer
     *
     * Deletes a Load Balancer.
    **/
    public openapisdk.models.operations.DeleteLoadBalancersIdResponse deleteLoadBalancersId(openapisdk.models.operations.DeleteLoadBalancersIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/load_balancers/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteLoadBalancersIdResponse res = new openapisdk.models.operations.DeleteLoadBalancersIdResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * getLoadBalancers - Get all Load Balancers
     *
     * Gets all existing Load Balancers that you have available.
    **/
    public openapisdk.models.operations.GetLoadBalancersResponse getLoadBalancers(openapisdk.models.operations.GetLoadBalancersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/load_balancers");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetLoadBalancersResponse res = new openapisdk.models.operations.GetLoadBalancersResponse() {{
            getLoadBalancers200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetLoadBalancers200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetLoadBalancers200ApplicationJson.class);
                res.getLoadBalancers200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getLoadBalancersId - Get a Load Balancer
     *
     * Gets a specific Load Balancer object.
    **/
    public openapisdk.models.operations.GetLoadBalancersIdResponse getLoadBalancersId(openapisdk.models.operations.GetLoadBalancersIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/load_balancers/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetLoadBalancersIdResponse res = new openapisdk.models.operations.GetLoadBalancersIdResponse() {{
            getLoadBalancersId200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetLoadBalancersId200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetLoadBalancersId200ApplicationJson.class);
                res.getLoadBalancersId200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getLoadBalancersIdMetrics - Get Metrics for a LoadBalancer
     *
     * You must specify the type of metric to get: `open_connections`, `connections_per_second`, `requests_per_second` or `bandwidth`. You can also specify more than one type by comma separation, e.g. `requests_per_second,bandwidth`.
     * 
     * Depending on the type you will get different time series data:
     * 
     * |Type | Timeseries | Unit | Description |
     * |---- |------------|------|-------------|
     * | open_connections | open_connections | number | Open connections |
     * | connections_per_second | connections_per_second | connections/s | Connections per second |
     * | requests_per_second | requests_per_second | requests/s | Requests per second |
     * | bandwidth | bandwidth.in | bytes/s | Ingress bandwidth |
     * || bandwidth.out | bytes/s | Egress bandwidth |
     * 
     * Metrics are available for the last 30 days only.
     * 
     * If you do not provide the step argument we will automatically adjust it so that 200 samples are returned.
     * 
     * We limit the number of samples to a maximum of 500 and will adjust the step parameter accordingly.
     * 
    **/
    public openapisdk.models.operations.GetLoadBalancersIdMetricsResponse getLoadBalancersIdMetrics(openapisdk.models.operations.GetLoadBalancersIdMetricsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/load_balancers/{id}/metrics", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetLoadBalancersIdMetricsResponse res = new openapisdk.models.operations.GetLoadBalancersIdMetricsResponse() {{
            getLoadBalancersIdMetrics200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetLoadBalancersIdMetrics200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetLoadBalancersIdMetrics200ApplicationJson.class);
                res.getLoadBalancersIdMetrics200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postLoadBalancers - Create a Load Balancer
     *
     * Creates a Load Balancer.
     * 
     * #### Call specific error codes
     * 
     * | Code                                    | Description                                                                                           |
     * |-----------------------------------------|-------------------------------------------------------------------------------------------------------|
     * | `cloud_resource_ip_not_allowed`         | The IP you are trying to add as a target belongs to a Hetzner Cloud resource                          |
     * | `ip_not_owned`                          | The IP is not owned by the owner of the project of the Load Balancer                                  |
     * | `load_balancer_not_attached_to_network` | The Load Balancer is not attached to a network                                                        |
     * | `robot_unavailable`                     | Robot was not available. The caller may retry the operation after a short delay.                      |
     * | `server_not_attached_to_network`        | The server you are trying to add as a target is not attached to the same network as the Load Balancer |
     * | `source_port_already_used`              | The source port you are trying to add is already in use                                               |
     * | `target_already_defined`                | The Load Balancer target you are trying to define is already defined                                  |
     * 
    **/
    public openapisdk.models.operations.PostLoadBalancersResponse postLoadBalancers(openapisdk.models.operations.PostLoadBalancersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/load_balancers");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostLoadBalancersResponse res = new openapisdk.models.operations.PostLoadBalancersResponse() {{
            postLoadBalancers201ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostLoadBalancers201ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostLoadBalancers201ApplicationJson.class);
                res.postLoadBalancers201ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * putLoadBalancersId - Update a Load Balancer
     *
     * Updates a Load Balancer. You can update a Load Balancer’s name and a Load Balancer’s labels.
     * 
     * Note that when updating labels, the Load Balancer’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
     * 
     * Note: if the Load Balancer object changes during the request, the response will be a “conflict” error.
     * 
    **/
    public openapisdk.models.operations.PutLoadBalancersIdResponse putLoadBalancersId(openapisdk.models.operations.PutLoadBalancersIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/load_balancers/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutLoadBalancersIdResponse res = new openapisdk.models.operations.PutLoadBalancersIdResponse() {{
            putLoadBalancersId200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PutLoadBalancersId200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PutLoadBalancersId200ApplicationJson.class);
                res.putLoadBalancersId200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}