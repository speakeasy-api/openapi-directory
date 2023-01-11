package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;

public class Statistics {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Statistics(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getTargetsAllAverageFixTime - Average fix time graph data (all targets)
    **/
    public openapisdk.models.operations.GetTargetsAllAverageFixTimeResponse getTargetsAllAverageFixTime() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/all/average_fix_time/");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTargetsAllAverageFixTimeResponse res = new openapisdk.models.operations.GetTargetsAllAverageFixTimeResponse() {{
            getTargetsAllAverageFixTime200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsAllAverageFixTime200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsAllAverageFixTime200ApplicationJson.class);
                res.getTargetsAllAverageFixTime200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getTargetsAllNeedsAttentionPie - Targets with open vulnerabilities pie chart data
    **/
    public openapisdk.models.operations.GetTargetsAllNeedsAttentionPieResponse getTargetsAllNeedsAttentionPie() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/all/needs_attention_pie/");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTargetsAllNeedsAttentionPieResponse res = new openapisdk.models.operations.GetTargetsAllNeedsAttentionPieResponse() {{
            getTargetsAllNeedsAttentionPie200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsAllNeedsAttentionPie200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsAllNeedsAttentionPie200ApplicationJson.class);
                res.getTargetsAllNeedsAttentionPie200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getTargetsAllNeedsAttentionTop - Targets with open vulnerabilities
    **/
    public openapisdk.models.operations.GetTargetsAllNeedsAttentionTopResponse getTargetsAllNeedsAttentionTop() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/all/needs_attention_top/");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTargetsAllNeedsAttentionTopResponse res = new openapisdk.models.operations.GetTargetsAllNeedsAttentionTopResponse() {{
            getTargetsAllNeedsAttentionTop200ApplicationJSONObjects = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsAllNeedsAttentionTop200ApplicationJson[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsAllNeedsAttentionTop200ApplicationJson[].class);
                res.getTargetsAllNeedsAttentionTop200ApplicationJSONObjects = out;
            }
        }

        return res;
    }
	
	
    /**
     * getTargetsAllRiskTrend - Risk trend graph data (all targets)
    **/
    public openapisdk.models.operations.GetTargetsAllRiskTrendResponse getTargetsAllRiskTrend() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/all/risk_trend/");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTargetsAllRiskTrendResponse res = new openapisdk.models.operations.GetTargetsAllRiskTrendResponse() {{
            getTargetsAllRiskTrend200ApplicationJSONObjects = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsAllRiskTrend200ApplicationJson[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsAllRiskTrend200ApplicationJson[].class);
                res.getTargetsAllRiskTrend200ApplicationJSONObjects = out;
            }
        }

        return res;
    }
	
	
    /**
     * getTargetsAllSeverityTrend - Severity trend graph data (all targets)
    **/
    public openapisdk.models.operations.GetTargetsAllSeverityTrendResponse getTargetsAllSeverityTrend() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/all/severity_trend/");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTargetsAllSeverityTrendResponse res = new openapisdk.models.operations.GetTargetsAllSeverityTrendResponse() {{
            getTargetsAllSeverityTrend200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsAllSeverityTrend200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsAllSeverityTrend200ApplicationJson.class);
                res.getTargetsAllSeverityTrend200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getTargetsAllTopVulns - Top 5 vulnerabilities (all targets).
    **/
    public openapisdk.models.operations.GetTargetsAllTopVulnsResponse getTargetsAllTopVulns() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/all/top_vulns/");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTargetsAllTopVulnsResponse res = new openapisdk.models.operations.GetTargetsAllTopVulnsResponse() {{
            getTargetsAllTopVulns200ApplicationJSONObjects = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsAllTopVulns200ApplicationJson[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsAllTopVulns200ApplicationJson[].class);
                res.getTargetsAllTopVulns200ApplicationJSONObjects = out;
            }
        }

        return res;
    }
	
	
    /**
     * getTargetsTargetIdAverageFixTime - Average vulnerability trend graph data
    **/
    public openapisdk.models.operations.GetTargetsTargetIdAverageFixTimeResponse getTargetsTargetIdAverageFixTime(openapisdk.models.operations.GetTargetsTargetIdAverageFixTimeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/average_fix_time/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTargetsTargetIdAverageFixTimeResponse res = new openapisdk.models.operations.GetTargetsTargetIdAverageFixTimeResponse() {{
            getTargetsTargetIdAverageFixTime200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdAverageFixTime200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdAverageFixTime200ApplicationJson.class);
                res.getTargetsTargetIdAverageFixTime200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getTargetsTargetIdRiskTrend - Risk trend graph data
    **/
    public openapisdk.models.operations.GetTargetsTargetIdRiskTrendResponse getTargetsTargetIdRiskTrend(openapisdk.models.operations.GetTargetsTargetIdRiskTrendRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/risk_trend/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTargetsTargetIdRiskTrendResponse res = new openapisdk.models.operations.GetTargetsTargetIdRiskTrendResponse() {{
            getTargetsTargetIdRiskTrend200ApplicationJSONObjects = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdRiskTrend200ApplicationJson[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdRiskTrend200ApplicationJson[].class);
                res.getTargetsTargetIdRiskTrend200ApplicationJSONObjects = out;
            }
        }

        return res;
    }
	
	
    /**
     * getTargetsTargetIdSeverityTrend - Severity trend graph data.
    **/
    public openapisdk.models.operations.GetTargetsTargetIdSeverityTrendResponse getTargetsTargetIdSeverityTrend(openapisdk.models.operations.GetTargetsTargetIdSeverityTrendRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/severity_trend/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTargetsTargetIdSeverityTrendResponse res = new openapisdk.models.operations.GetTargetsTargetIdSeverityTrendResponse() {{
            getTargetsTargetIdSeverityTrend200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdSeverityTrend200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdSeverityTrend200ApplicationJson.class);
                res.getTargetsTargetIdSeverityTrend200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getTargetsTargetIdTopVulns - Top 5 vulnerabilities
    **/
    public openapisdk.models.operations.GetTargetsTargetIdTopVulnsResponse getTargetsTargetIdTopVulns(openapisdk.models.operations.GetTargetsTargetIdTopVulnsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/top_vulns/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTargetsTargetIdTopVulnsResponse res = new openapisdk.models.operations.GetTargetsTargetIdTopVulnsResponse() {{
            getTargetsTargetIdTopVulns200ApplicationJSONObjects = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdTopVulns200ApplicationJson[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdTopVulns200ApplicationJson[].class);
                res.getTargetsTargetIdTopVulns200ApplicationJSONObjects = out;
            }
        }

        return res;
    }
	
}