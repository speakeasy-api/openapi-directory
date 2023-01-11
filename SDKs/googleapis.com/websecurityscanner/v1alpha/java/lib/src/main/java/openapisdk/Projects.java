package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Projects {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Projects(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * websecurityscannerProjectsScanConfigsCreate - Creates a new ScanConfig.
    **/
    public openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsCreateResponse websecurityscannerProjectsScanConfigsCreate(openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1alpha/{parent}/scanConfigs", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsCreateResponse res = new openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsCreateResponse() {{
            scanConfig = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ScanConfig out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ScanConfig.class);
                res.scanConfig = out;
            }
        }

        return res;
    }
	
	
    /**
     * websecurityscannerProjectsScanConfigsDelete - Deletes an existing ScanConfig and its child resources.
    **/
    public openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsDeleteResponse websecurityscannerProjectsScanConfigsDelete(openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1alpha/{name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsDeleteResponse res = new openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsDeleteResponse() {{
            empty = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.empty = out;
            }
        }

        return res;
    }
	
	
    /**
     * websecurityscannerProjectsScanConfigsList - Lists ScanConfigs under a given project.
    **/
    public openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsListResponse websecurityscannerProjectsScanConfigsList(openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1alpha/{parent}/scanConfigs", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsListResponse res = new openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsListResponse() {{
            listScanConfigsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListScanConfigsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListScanConfigsResponse.class);
                res.listScanConfigsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * websecurityscannerProjectsScanConfigsPatch - Updates a ScanConfig. This method support partial update of a ScanConfig.
    **/
    public openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsPatchResponse websecurityscannerProjectsScanConfigsPatch(openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsPatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1alpha/{name}", request.pathParams);
        
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
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsPatchResponse res = new openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsPatchResponse() {{
            scanConfig = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ScanConfig out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ScanConfig.class);
                res.scanConfig = out;
            }
        }

        return res;
    }
	
	
    /**
     * websecurityscannerProjectsScanConfigsScanRunsCrawledUrlsList - List CrawledUrls under a given ScanRun.
    **/
    public openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListResponse websecurityscannerProjectsScanConfigsScanRunsCrawledUrlsList(openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1alpha/{parent}/crawledUrls", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListResponse res = new openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListResponse() {{
            listCrawledUrlsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListCrawledUrlsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListCrawledUrlsResponse.class);
                res.listCrawledUrlsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * websecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsList - List all FindingTypeStats under a given ScanRun.
    **/
    public openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListResponse websecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsList(openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1alpha/{parent}/findingTypeStats", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListResponse res = new openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListResponse() {{
            listFindingTypeStatsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListFindingTypeStatsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListFindingTypeStatsResponse.class);
                res.listFindingTypeStatsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * websecurityscannerProjectsScanConfigsScanRunsFindingsGet - Gets a Finding.
    **/
    public openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetResponse websecurityscannerProjectsScanConfigsScanRunsFindingsGet(openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1alpha/{name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetResponse res = new openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetResponse() {{
            finding = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Finding out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Finding.class);
                res.finding = out;
            }
        }

        return res;
    }
	
	
    /**
     * websecurityscannerProjectsScanConfigsScanRunsFindingsList - List Findings under a given ScanRun.
    **/
    public openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsListResponse websecurityscannerProjectsScanConfigsScanRunsFindingsList(openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1alpha/{parent}/findings", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsListResponse res = new openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsListResponse() {{
            listFindingsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListFindingsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListFindingsResponse.class);
                res.listFindingsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * websecurityscannerProjectsScanConfigsScanRunsList - Lists ScanRuns under a given ScanConfig, in descending order of ScanRun stop time.
    **/
    public openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsListResponse websecurityscannerProjectsScanConfigsScanRunsList(openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1alpha/{parent}/scanRuns", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsListResponse res = new openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsListResponse() {{
            listScanRunsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListScanRunsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListScanRunsResponse.class);
                res.listScanRunsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * websecurityscannerProjectsScanConfigsScanRunsStop - Stops a ScanRun. The stopped ScanRun is returned.
    **/
    public openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsStopResponse websecurityscannerProjectsScanConfigsScanRunsStop(openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsStopRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1alpha/{name}:stop", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsStopResponse res = new openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsStopResponse() {{
            scanRun = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ScanRun out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ScanRun.class);
                res.scanRun = out;
            }
        }

        return res;
    }
	
	
    /**
     * websecurityscannerProjectsScanConfigsStart - Start a ScanRun according to the given ScanConfig.
    **/
    public openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsStartResponse websecurityscannerProjectsScanConfigsStart(openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsStartRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1alpha/{name}:start", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsStartResponse res = new openapisdk.models.operations.WebsecurityscannerProjectsScanConfigsStartResponse() {{
            scanRun = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ScanRun out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ScanRun.class);
                res.scanRun = out;
            }
        }

        return res;
    }
	
}