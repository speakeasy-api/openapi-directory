package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class Wifi {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Wifi(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * connecttoWiFiNetwork - Connect to Wi-Fi Network
     *
     * **Note:** Not sure how the password is encrypted. Might be using the public certificate from /setup/eureka_info. So this cannot be used as of now. If someone figures it out, please [create a new issue here](https://github.com/rithvikvibhu/GHLocalApi/issues/new).
    **/
    public openapisdk.models.operations.ConnecttoWiFiNetworkResponse connecttoWiFiNetwork(openapisdk.models.operations.ConnecttoWiFiNetworkRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/connect_wifi");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ConnecttoWiFiNetworkResponse res = new openapisdk.models.operations.ConnecttoWiFiNetworkResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * forgetWiFiNetwork - Forget Wi-Fi Network
     *
     * This is to forget a saved network by `wpa_id`. Get the `wpa_id` from /setup/configured_networks
    **/
    public openapisdk.models.operations.ForgetWiFiNetworkResponse forgetWiFiNetwork(openapisdk.models.operations.ForgetWiFiNetworkRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/forget_wifi");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ForgetWiFiNetworkResponse res = new openapisdk.models.operations.ForgetWiFiNetworkResponse() {{
            forgetWiFiNetwork200TextPlainObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/plain")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.forgetWiFiNetwork200TextPlainObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSavedNetworks - Get Saved Networks
     *
     * This gets a list of all saved Wi-Fi networks.
     * 
     * Each network has `ssid`, `wpa_auth`, `wpa_cipher` and `wpa_id`.  
     * `wpa_id` is an incrementing number used to identify a saved network.  
     * #TODO: Add values for `wpa_auth` and `wpa_cipher`.
    **/
    public openapisdk.models.operations.GetSavedNetworksResponse getSavedNetworks() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/configured_networks");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSavedNetworksResponse res = new openapisdk.models.operations.GetSavedNetworksResponse() {{
            example113s = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Example113[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Example113[].class);
                res.example113s = out;
            }
        }

        return res;
    }
	
	
    /**
     * getWiFiScanResults - Get Wi-Fi Scan Results
     *
     * This gets a list of all nearby Wi-Fi access points.
     * 
     * The list only has the connected AP by default. Once a scan is triggered by `/setup/scan_wifi`, the whole list is cached for ~3 minutes. Then it will revert to returning only the connected AP again.
    **/
    public openapisdk.models.operations.GetWiFiScanResultsResponse getWiFiScanResults() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/scan_results");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetWiFiScanResultsResponse res = new openapisdk.models.operations.GetWiFiScanResultsResponse() {{
            example114s = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Example114[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Example114[].class);
                res.example114s = out;
            }
        }

        return res;
    }
	
	
    /**
     * scanforNetworks - Scan for Networks
     *
     * This initiates scanning for Wi-Fi networks.
     * 
     * The results can be obtained with `/setup/scan_results` after triggering the scan with this request.
    **/
    public openapisdk.models.operations.ScanforNetworksResponse scanforNetworks() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/scan_wifi");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ScanforNetworksResponse res = new openapisdk.models.operations.ScanforNetworksResponse() {{
            scanforNetworks200TextPlainObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/plain")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.scanforNetworks200TextPlainObject = out;
            }
        }

        return res;
    }
	
}