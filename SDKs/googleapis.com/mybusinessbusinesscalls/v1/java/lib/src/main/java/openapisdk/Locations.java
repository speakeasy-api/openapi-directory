package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Locations {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Locations(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * mybusinessbusinesscallsLocationsBusinesscallsinsightsList - Returns insights for Business calls for a location.
    **/
    public openapisdk.models.operations.MybusinessbusinesscallsLocationsBusinesscallsinsightsListResponse mybusinessbusinesscallsLocationsBusinesscallsinsightsList(openapisdk.models.operations.MybusinessbusinesscallsLocationsBusinesscallsinsightsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/businesscallsinsights", request.pathParams);
        
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

        openapisdk.models.operations.MybusinessbusinesscallsLocationsBusinesscallsinsightsListResponse res = new openapisdk.models.operations.MybusinessbusinesscallsLocationsBusinesscallsinsightsListResponse() {{
            listBusinessCallsInsightsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListBusinessCallsInsightsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListBusinessCallsInsightsResponse.class);
                res.listBusinessCallsInsightsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * mybusinessbusinesscallsLocationsGetBusinesscallssettings - Returns the Business calls settings resource for the given location.
    **/
    public openapisdk.models.operations.MybusinessbusinesscallsLocationsGetBusinesscallssettingsResponse mybusinessbusinesscallsLocationsGetBusinesscallssettings(openapisdk.models.operations.MybusinessbusinesscallsLocationsGetBusinesscallssettingsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}", request.pathParams);
        
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

        openapisdk.models.operations.MybusinessbusinesscallsLocationsGetBusinesscallssettingsResponse res = new openapisdk.models.operations.MybusinessbusinesscallsLocationsGetBusinesscallssettingsResponse() {{
            businessCallsSettings = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BusinessCallsSettings out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BusinessCallsSettings.class);
                res.businessCallsSettings = out;
            }
        }

        return res;
    }
	
	
    /**
     * mybusinessbusinesscallsLocationsUpdateBusinesscallssettings - Updates the Business call settings for the specified location.
    **/
    public openapisdk.models.operations.MybusinessbusinesscallsLocationsUpdateBusinesscallssettingsResponse mybusinessbusinesscallsLocationsUpdateBusinesscallssettings(openapisdk.models.operations.MybusinessbusinesscallsLocationsUpdateBusinesscallssettingsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.MybusinessbusinesscallsLocationsUpdateBusinesscallssettingsResponse res = new openapisdk.models.operations.MybusinessbusinesscallsLocationsUpdateBusinesscallssettingsResponse() {{
            businessCallsSettings = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BusinessCallsSettings out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BusinessCallsSettings.class);
                res.businessCallsSettings = out;
            }
        }

        return res;
    }
	
}