package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Analytics {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Analytics(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getDeviceCameraAnalyticsLive - Returns live state from camera of analytics zones
     *
     * Returns live state from camera of analytics zones
    **/
    public openapisdk.models.operations.GetDeviceCameraAnalyticsLiveResponse getDeviceCameraAnalyticsLive(openapisdk.models.operations.GetDeviceCameraAnalyticsLiveRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/devices/{serial}/camera/analytics/live", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDeviceCameraAnalyticsLiveResponse res = new openapisdk.models.operations.GetDeviceCameraAnalyticsLiveResponse() {{
            getDeviceCameraAnalyticsLive200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getDeviceCameraAnalyticsLive200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDeviceCameraAnalyticsOverview - Returns an overview of aggregate analytics data for a timespan
     *
     * Returns an overview of aggregate analytics data for a timespan
    **/
    public openapisdk.models.operations.GetDeviceCameraAnalyticsOverviewResponse getDeviceCameraAnalyticsOverview(openapisdk.models.operations.GetDeviceCameraAnalyticsOverviewRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/devices/{serial}/camera/analytics/overview", request.pathParams);
        
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

        openapisdk.models.operations.GetDeviceCameraAnalyticsOverviewResponse res = new openapisdk.models.operations.GetDeviceCameraAnalyticsOverviewResponse() {{
            getDeviceCameraAnalyticsOverview200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getDeviceCameraAnalyticsOverview200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDeviceCameraAnalyticsRecent - Returns most recent record for analytics zones
     *
     * Returns most recent record for analytics zones
    **/
    public openapisdk.models.operations.GetDeviceCameraAnalyticsRecentResponse getDeviceCameraAnalyticsRecent(openapisdk.models.operations.GetDeviceCameraAnalyticsRecentRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/devices/{serial}/camera/analytics/recent", request.pathParams);
        
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

        openapisdk.models.operations.GetDeviceCameraAnalyticsRecentResponse res = new openapisdk.models.operations.GetDeviceCameraAnalyticsRecentResponse() {{
            getDeviceCameraAnalyticsRecent200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getDeviceCameraAnalyticsRecent200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDeviceCameraAnalyticsZoneHistory - Return historical records for analytic zones
     *
     * Return historical records for analytic zones
    **/
    public openapisdk.models.operations.GetDeviceCameraAnalyticsZoneHistoryResponse getDeviceCameraAnalyticsZoneHistory(openapisdk.models.operations.GetDeviceCameraAnalyticsZoneHistoryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/devices/{serial}/camera/analytics/zones/{zoneId}/history", request.pathParams);
        
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

        openapisdk.models.operations.GetDeviceCameraAnalyticsZoneHistoryResponse res = new openapisdk.models.operations.GetDeviceCameraAnalyticsZoneHistoryResponse() {{
            getDeviceCameraAnalyticsZoneHistory200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getDeviceCameraAnalyticsZoneHistory200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDeviceCameraAnalyticsZones - Returns all configured analytic zones for this camera
     *
     * Returns all configured analytic zones for this camera
    **/
    public openapisdk.models.operations.GetDeviceCameraAnalyticsZonesResponse getDeviceCameraAnalyticsZones(openapisdk.models.operations.GetDeviceCameraAnalyticsZonesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/devices/{serial}/camera/analytics/zones", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDeviceCameraAnalyticsZonesResponse res = new openapisdk.models.operations.GetDeviceCameraAnalyticsZonesResponse() {{
            getDeviceCameraAnalyticsZones200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getDeviceCameraAnalyticsZones200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}