package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class V2 {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public V2(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getDiscoveryV2Suggest - Find Suggest
     *
     * Find search suggestions and filter your suggestions by location, source, etc.
    **/
    public openapisdk.models.operations.GetDiscoveryV2SuggestResponse getDiscoveryV2Suggest(openapisdk.models.operations.GetDiscoveryV2SuggestRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/discovery/v2/suggest");
        
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

        openapisdk.models.operations.GetDiscoveryV2SuggestResponse res = new openapisdk.models.operations.GetDiscoveryV2SuggestResponse() {{
            getDiscoveryV2Suggest200ApplicationHalPlusJsonString = null;
            getDiscoveryV2Suggest200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/hal+json; charset=utf-8")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.getDiscoveryV2Suggest200ApplicationHalPlusJsonString = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.getDiscoveryV2Suggest200ApplicationJSONString = out;
            }
        }

        return res;
    }
	
}