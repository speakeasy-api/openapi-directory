package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class ConnectivityMonitoringDestinations {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public ConnectivityMonitoringDestinations(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getNetworkApplianceConnectivityMonitoringDestinations - Return the connectivity testing destinations for an MX network
     *
     * Return the connectivity testing destinations for an MX network
    **/
    public openapisdk.models.operations.GetNetworkApplianceConnectivityMonitoringDestinationsResponse getNetworkApplianceConnectivityMonitoringDestinations(openapisdk.models.operations.GetNetworkApplianceConnectivityMonitoringDestinationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/appliance/connectivityMonitoringDestinations", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkApplianceConnectivityMonitoringDestinationsResponse res = new openapisdk.models.operations.GetNetworkApplianceConnectivityMonitoringDestinationsResponse() {{
            getNetworkApplianceConnectivityMonitoringDestinations200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkApplianceConnectivityMonitoringDestinations200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkCellularGatewayConnectivityMonitoringDestinations - Return the connectivity testing destinations for an MG network
     *
     * Return the connectivity testing destinations for an MG network
    **/
    public openapisdk.models.operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsResponse getNetworkCellularGatewayConnectivityMonitoringDestinations(openapisdk.models.operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/cellularGateway/connectivityMonitoringDestinations", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsResponse res = new openapisdk.models.operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsResponse() {{
            getNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkApplianceConnectivityMonitoringDestinations - Update the connectivity testing destinations for an MX network
     *
     * Update the connectivity testing destinations for an MX network
    **/
    public openapisdk.models.operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsResponse updateNetworkApplianceConnectivityMonitoringDestinations(openapisdk.models.operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/appliance/connectivityMonitoringDestinations", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsResponse res = new openapisdk.models.operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsResponse() {{
            updateNetworkApplianceConnectivityMonitoringDestinations200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkApplianceConnectivityMonitoringDestinations200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkCellularGatewayConnectivityMonitoringDestinations - Update the connectivity testing destinations for an MG network
     *
     * Update the connectivity testing destinations for an MG network
    **/
    public openapisdk.models.operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse updateNetworkCellularGatewayConnectivityMonitoringDestinations(openapisdk.models.operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/cellularGateway/connectivityMonitoringDestinations", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse res = new openapisdk.models.operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse() {{
            updateNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}