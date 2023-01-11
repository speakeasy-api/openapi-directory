package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class LinkAggregations {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public LinkAggregations(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * createNetworkSwitchLinkAggregation - Create a link aggregation group
     *
     * Create a link aggregation group
    **/
    public openapisdk.models.operations.CreateNetworkSwitchLinkAggregationResponse createNetworkSwitchLinkAggregation(openapisdk.models.operations.CreateNetworkSwitchLinkAggregationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/linkAggregations", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateNetworkSwitchLinkAggregationResponse res = new openapisdk.models.operations.CreateNetworkSwitchLinkAggregationResponse() {{
            createNetworkSwitchLinkAggregation201ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.createNetworkSwitchLinkAggregation201ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteNetworkSwitchLinkAggregation - Split a link aggregation group into separate ports
     *
     * Split a link aggregation group into separate ports
    **/
    public openapisdk.models.operations.DeleteNetworkSwitchLinkAggregationResponse deleteNetworkSwitchLinkAggregation(openapisdk.models.operations.DeleteNetworkSwitchLinkAggregationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/linkAggregations/{linkAggregationId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteNetworkSwitchLinkAggregationResponse res = new openapisdk.models.operations.DeleteNetworkSwitchLinkAggregationResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * getNetworkSwitchLinkAggregations - List link aggregation groups
     *
     * List link aggregation groups
    **/
    public openapisdk.models.operations.GetNetworkSwitchLinkAggregationsResponse getNetworkSwitchLinkAggregations(openapisdk.models.operations.GetNetworkSwitchLinkAggregationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/linkAggregations", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkSwitchLinkAggregationsResponse res = new openapisdk.models.operations.GetNetworkSwitchLinkAggregationsResponse() {{
            getNetworkSwitchLinkAggregations200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkSwitchLinkAggregations200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkSwitchLinkAggregation - Update a link aggregation group
     *
     * Update a link aggregation group
    **/
    public openapisdk.models.operations.UpdateNetworkSwitchLinkAggregationResponse updateNetworkSwitchLinkAggregation(openapisdk.models.operations.UpdateNetworkSwitchLinkAggregationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/linkAggregations/{linkAggregationId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkSwitchLinkAggregationResponse res = new openapisdk.models.operations.UpdateNetworkSwitchLinkAggregationResponse() {{
            updateNetworkSwitchLinkAggregation200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkSwitchLinkAggregation200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}