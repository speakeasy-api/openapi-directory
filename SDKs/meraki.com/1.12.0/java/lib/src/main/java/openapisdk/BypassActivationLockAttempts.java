package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class BypassActivationLockAttempts {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public BypassActivationLockAttempts(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * createNetworkSmBypassActivationLockAttempt - Bypass activation lock attempt
     *
     * Bypass activation lock attempt
    **/
    public openapisdk.models.operations.CreateNetworkSmBypassActivationLockAttemptResponse createNetworkSmBypassActivationLockAttempt(openapisdk.models.operations.CreateNetworkSmBypassActivationLockAttemptRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/sm/bypassActivationLockAttempts", request.pathParams);
        
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

        openapisdk.models.operations.CreateNetworkSmBypassActivationLockAttemptResponse res = new openapisdk.models.operations.CreateNetworkSmBypassActivationLockAttemptResponse() {{
            createNetworkSmBypassActivationLockAttempt201ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.createNetworkSmBypassActivationLockAttempt201ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkSmBypassActivationLockAttempt - Bypass activation lock attempt status
     *
     * Bypass activation lock attempt status
    **/
    public openapisdk.models.operations.GetNetworkSmBypassActivationLockAttemptResponse getNetworkSmBypassActivationLockAttempt(openapisdk.models.operations.GetNetworkSmBypassActivationLockAttemptRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/sm/bypassActivationLockAttempts/{attemptId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkSmBypassActivationLockAttemptResponse res = new openapisdk.models.operations.GetNetworkSmBypassActivationLockAttemptResponse() {{
            getNetworkSmBypassActivationLockAttempt200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkSmBypassActivationLockAttempt200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}