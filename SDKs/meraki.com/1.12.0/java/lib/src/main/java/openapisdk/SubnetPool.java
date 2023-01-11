package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class SubnetPool {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public SubnetPool(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getNetworkCellularGatewaySubnetPool - Return the subnet pool and mask configured for MGs in the network.
     *
     * Return the subnet pool and mask configured for MGs in the network.
    **/
    public openapisdk.models.operations.GetNetworkCellularGatewaySubnetPoolResponse getNetworkCellularGatewaySubnetPool(openapisdk.models.operations.GetNetworkCellularGatewaySubnetPoolRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/cellularGateway/subnetPool", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkCellularGatewaySubnetPoolResponse res = new openapisdk.models.operations.GetNetworkCellularGatewaySubnetPoolResponse() {{
            getNetworkCellularGatewaySubnetPool200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkCellularGatewaySubnetPool200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkCellularGatewaySubnetPool - Update the subnet pool and mask configuration for MGs in the network.
     *
     * Update the subnet pool and mask configuration for MGs in the network.
    **/
    public openapisdk.models.operations.UpdateNetworkCellularGatewaySubnetPoolResponse updateNetworkCellularGatewaySubnetPool(openapisdk.models.operations.UpdateNetworkCellularGatewaySubnetPoolRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/cellularGateway/subnetPool", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkCellularGatewaySubnetPoolResponse res = new openapisdk.models.operations.UpdateNetworkCellularGatewaySubnetPoolResponse() {{
            updateNetworkCellularGatewaySubnetPool200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkCellularGatewaySubnetPool200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}