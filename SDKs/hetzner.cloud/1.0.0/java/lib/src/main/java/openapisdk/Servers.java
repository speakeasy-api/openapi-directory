package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Servers {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Servers(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteServersId - Delete a Server
     *
     * Deletes a Server. This immediately removes the Server from your account, and it is no longer accessible.
    **/
    public openapisdk.models.operations.DeleteServersIdResponse deleteServersId(openapisdk.models.operations.DeleteServersIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/servers/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteServersIdResponse res = new openapisdk.models.operations.DeleteServersIdResponse() {{
            deleteServersId200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.DeleteServersId200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.DeleteServersId200ApplicationJson.class);
                res.deleteServersId200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getServers - Get all Servers
     *
     * Returns all existing Server objects
    **/
    public openapisdk.models.operations.GetServersResponse getServers(openapisdk.models.operations.GetServersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/servers");
        
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

        openapisdk.models.operations.GetServersResponse res = new openapisdk.models.operations.GetServersResponse() {{
            getServers200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetServers200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetServers200ApplicationJson.class);
                res.getServers200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getServersId - Get a Server
     *
     * Returns a specific Server object. The Server must exist inside the Project
    **/
    public openapisdk.models.operations.GetServersIdResponse getServersId(openapisdk.models.operations.GetServersIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/servers/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetServersIdResponse res = new openapisdk.models.operations.GetServersIdResponse() {{
            getServersId200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetServersId200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetServersId200ApplicationJson.class);
                res.getServersId200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getServersIdMetrics - Get Metrics for a Server
     *
     * Get Metrics for specified Server.
     * 
     * You must specify the type of metric to get: cpu, disk or network. You can also specify more than one type by comma separation, e.g. cpu,disk.
     * 
     * Depending on the type you will get different time series data
     * 
     * | Type    | Timeseries              | Unit      | Description                                          |
     * |---------|-------------------------|-----------|------------------------------------------------------|
     * | cpu     | cpu                     | percent   | Percent CPU usage                                    |
     * | disk    | disk.0.iops.read        | iop/s     | Number of read IO operations per second              |
     * |         | disk.0.iops.write       | iop/s     | Number of write IO operations per second             |
     * |         | disk.0.bandwidth.read   | bytes/s   | Bytes read per second                                |
     * |         | disk.0.bandwidth.write  | bytes/s   | Bytes written per second                             |
     * | network | network.0.pps.in        | packets/s | Public Network interface packets per second received |
     * |         | network.0.pps.out       | packets/s | Public Network interface packets per second sent     |
     * |         | network.0.bandwidth.in  | bytes/s   | Public Network interface bytes/s received            |
     * |         | network.0.bandwidth.out | bytes/s   | Public Network interface bytes/s sent                |
     * 
     * Metrics are available for the last 30 days only.
     * 
     * If you do not provide the step argument we will automatically adjust it so that a maximum of 200 samples are returned.
     * 
     * We limit the number of samples returned to a maximum of 500 and will adjust the step parameter accordingly.
     * 
    **/
    public openapisdk.models.operations.GetServersIdMetricsResponse getServersIdMetrics(openapisdk.models.operations.GetServersIdMetricsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/servers/{id}/metrics", request.pathParams);
        
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

        openapisdk.models.operations.GetServersIdMetricsResponse res = new openapisdk.models.operations.GetServersIdMetricsResponse() {{
            getServersIdMetrics200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetServersIdMetrics200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetServersIdMetrics200ApplicationJson.class);
                res.getServersIdMetrics200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postServers - Create a Server
     *
     * Creates a new Server. Returns preliminary information about the Server as well as an Action that covers progress of creation.
    **/
    public openapisdk.models.operations.PostServersResponse postServers(openapisdk.models.operations.PostServersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/servers");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostServersResponse res = new openapisdk.models.operations.PostServersResponse() {{
            createServerResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostServersCreateServerResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostServersCreateServerResponse.class);
                res.createServerResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * putServersId - Update a Server
     *
     * Updates a Server. You can update a Server’s name and a Server’s labels.
     * Please note that Server names must be unique per Project and valid hostnames as per RFC 1123 (i.e. may only contain letters, digits, periods, and dashes).
     * Also note that when updating labels, the Server’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
    **/
    public openapisdk.models.operations.PutServersIdResponse putServersId(openapisdk.models.operations.PutServersIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/servers/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutServersIdResponse res = new openapisdk.models.operations.PutServersIdResponse() {{
            putServersId200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PutServersId200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PutServersId200ApplicationJson.class);
                res.putServersId200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}