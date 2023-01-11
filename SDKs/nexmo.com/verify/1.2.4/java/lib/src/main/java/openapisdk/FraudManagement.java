package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class FraudManagement {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public FraudManagement(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * networkUnblock - Request a network unblock
     *
     * Request to unblock a network that has been blocked due to potential fraud detection
     * <div class="Vlt-callout Vlt-callout--critical">
     *   <div class="Vlt-callout__content">
     *     <h4>Network Unblock is switched off by default.</h4>
     *     Please contact Sales to enable the Network Unblock API for your account.
     *   </div>
     * </div>
    **/
    public openapisdk.models.operations.NetworkUnblockResponse networkUnblock(openapisdk.models.operations.NetworkUnblockRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/network-unblock");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.NetworkUnblockResponse res = new openapisdk.models.operations.NetworkUnblockResponse() {{
            networkUnblockResponseOk = null;
            networkUnblockResponseForbidden = null;
            networkUnblockResponseNotFound = null;
            networkUnblock422ApplicationJSONOneOf = null;
            errorThrottled = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 202) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.NetworkUnblockResponseOk out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.NetworkUnblockResponseOk.class);
                res.networkUnblockResponseOk = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.NetworkUnblockResponseForbidden out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.NetworkUnblockResponseForbidden.class);
                res.networkUnblockResponseForbidden = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.NetworkUnblockResponseNotFound out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.NetworkUnblockResponseNotFound.class);
                res.networkUnblockResponseNotFound = out;
            }
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.networkUnblock422ApplicationJSONOneOf = out;
            }
        }
        else if (httpRes.statusCode() == 429) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ErrorThrottled out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ErrorThrottled.class);
                res.errorThrottled = out;
            }
        }

        return res;
    }
	
}