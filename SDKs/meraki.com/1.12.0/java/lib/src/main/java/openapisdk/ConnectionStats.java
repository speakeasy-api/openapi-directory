package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class ConnectionStats {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public ConnectionStats(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getDeviceWirelessConnectionStats - Aggregated connectivity info for a given AP on this network
     *
     * Aggregated connectivity info for a given AP on this network
    **/
    public openapisdk.models.operations.GetDeviceWirelessConnectionStatsResponse getDeviceWirelessConnectionStats(openapisdk.models.operations.GetDeviceWirelessConnectionStatsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/devices/{serial}/wireless/connectionStats", request.pathParams);
        
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

        openapisdk.models.operations.GetDeviceWirelessConnectionStatsResponse res = new openapisdk.models.operations.GetDeviceWirelessConnectionStatsResponse() {{
            getDeviceWirelessConnectionStats200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getDeviceWirelessConnectionStats200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkWirelessClientConnectionStats - Aggregated connectivity info for a given client on this network
     *
     * Aggregated connectivity info for a given client on this network. Clients are identified by their MAC.
    **/
    public openapisdk.models.operations.GetNetworkWirelessClientConnectionStatsResponse getNetworkWirelessClientConnectionStats(openapisdk.models.operations.GetNetworkWirelessClientConnectionStatsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/wireless/clients/{clientId}/connectionStats", request.pathParams);
        
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

        openapisdk.models.operations.GetNetworkWirelessClientConnectionStatsResponse res = new openapisdk.models.operations.GetNetworkWirelessClientConnectionStatsResponse() {{
            getNetworkWirelessClientConnectionStats200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkWirelessClientConnectionStats200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkWirelessClientsConnectionStats - Aggregated connectivity info for this network, grouped by clients
     *
     * Aggregated connectivity info for this network, grouped by clients
    **/
    public openapisdk.models.operations.GetNetworkWirelessClientsConnectionStatsResponse getNetworkWirelessClientsConnectionStats(openapisdk.models.operations.GetNetworkWirelessClientsConnectionStatsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/wireless/clients/connectionStats", request.pathParams);
        
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

        openapisdk.models.operations.GetNetworkWirelessClientsConnectionStatsResponse res = new openapisdk.models.operations.GetNetworkWirelessClientsConnectionStatsResponse() {{
            getNetworkWirelessClientsConnectionStats200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkWirelessClientsConnectionStats200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkWirelessConnectionStats - Aggregated connectivity info for this network
     *
     * Aggregated connectivity info for this network
    **/
    public openapisdk.models.operations.GetNetworkWirelessConnectionStatsResponse getNetworkWirelessConnectionStats(openapisdk.models.operations.GetNetworkWirelessConnectionStatsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/wireless/connectionStats", request.pathParams);
        
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

        openapisdk.models.operations.GetNetworkWirelessConnectionStatsResponse res = new openapisdk.models.operations.GetNetworkWirelessConnectionStatsResponse() {{
            getNetworkWirelessConnectionStats200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkWirelessConnectionStats200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkWirelessDevicesConnectionStats - Aggregated connectivity info for this network, grouped by node
     *
     * Aggregated connectivity info for this network, grouped by node
    **/
    public openapisdk.models.operations.GetNetworkWirelessDevicesConnectionStatsResponse getNetworkWirelessDevicesConnectionStats(openapisdk.models.operations.GetNetworkWirelessDevicesConnectionStatsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/wireless/devices/connectionStats", request.pathParams);
        
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

        openapisdk.models.operations.GetNetworkWirelessDevicesConnectionStatsResponse res = new openapisdk.models.operations.GetNetworkWirelessDevicesConnectionStatsResponse() {{
            getNetworkWirelessDevicesConnectionStats200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkWirelessDevicesConnectionStats200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}