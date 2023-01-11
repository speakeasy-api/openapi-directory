package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class SettingsExternal {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public SettingsExternal(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    public openapisdk.models.operations.GetMarketingV3MarketingEventsAppIdSettingsGetAllResponse getMarketingV3MarketingEventsAppIdSettingsGetAll(openapisdk.models.operations.GetMarketingV3MarketingEventsAppIdSettingsGetAllRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/marketing/v3/marketing-events/{appId}/settings", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMarketingV3MarketingEventsAppIdSettingsGetAllResponse res = new openapisdk.models.operations.GetMarketingV3MarketingEventsAppIdSettingsGetAllResponse() {{
            eventDetailSettings = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.EventDetailSettings out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.EventDetailSettings.class);
                res.eventDetailSettings = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.PostMarketingV3MarketingEventsAppIdSettingsCreateResponse postMarketingV3MarketingEventsAppIdSettingsCreate(openapisdk.models.operations.PostMarketingV3MarketingEventsAppIdSettingsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/marketing/v3/marketing-events/{appId}/settings", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostMarketingV3MarketingEventsAppIdSettingsCreateResponse res = new openapisdk.models.operations.PostMarketingV3MarketingEventsAppIdSettingsCreateResponse() {{
            eventDetailSettings = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.EventDetailSettings out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.EventDetailSettings.class);
                res.eventDetailSettings = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
}