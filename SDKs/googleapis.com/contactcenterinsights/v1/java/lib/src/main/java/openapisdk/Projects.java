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
     * contactcenterinsightsProjectsLocationsConversationsAnalysesCreate - Creates an analysis. The long running operation is done when the analysis has completed.
    **/
    public openapisdk.models.operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateResponse contactcenterinsightsProjectsLocationsConversationsAnalysesCreate(openapisdk.models.operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/analyses", request.pathParams);
        
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

        openapisdk.models.operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateResponse res = new openapisdk.models.operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateResponse() {{
            googleLongrunningOperation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleLongrunningOperation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleLongrunningOperation.class);
                res.googleLongrunningOperation = out;
            }
        }

        return res;
    }
	
	
    /**
     * contactcenterinsightsProjectsLocationsConversationsAnalysesList - Lists analyses.
    **/
    public openapisdk.models.operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesListResponse contactcenterinsightsProjectsLocationsConversationsAnalysesList(openapisdk.models.operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/analyses", request.pathParams);
        
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

        openapisdk.models.operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesListResponse res = new openapisdk.models.operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesListResponse() {{
            googleCloudContactcenterinsightsV1ListAnalysesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudContactcenterinsightsV1ListAnalysesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudContactcenterinsightsV1ListAnalysesResponse.class);
                res.googleCloudContactcenterinsightsV1ListAnalysesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * contactcenterinsightsProjectsLocationsConversationsBulkAnalyze - Analyzes multiple conversations in a single request.
    **/
    public openapisdk.models.operations.ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeResponse contactcenterinsightsProjectsLocationsConversationsBulkAnalyze(openapisdk.models.operations.ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/conversations:bulkAnalyze", request.pathParams);
        
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

        openapisdk.models.operations.ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeResponse res = new openapisdk.models.operations.ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeResponse() {{
            googleLongrunningOperation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleLongrunningOperation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleLongrunningOperation.class);
                res.googleLongrunningOperation = out;
            }
        }

        return res;
    }
	
	
    /**
     * contactcenterinsightsProjectsLocationsConversationsCalculateStats - Gets conversation statistics.
    **/
    public openapisdk.models.operations.ContactcenterinsightsProjectsLocationsConversationsCalculateStatsResponse contactcenterinsightsProjectsLocationsConversationsCalculateStats(openapisdk.models.operations.ContactcenterinsightsProjectsLocationsConversationsCalculateStatsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{location}/conversations:calculateStats", request.pathParams);
        
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

        openapisdk.models.operations.ContactcenterinsightsProjectsLocationsConversationsCalculateStatsResponse res = new openapisdk.models.operations.ContactcenterinsightsProjectsLocationsConversationsCalculateStatsResponse() {{
            googleCloudContactcenterinsightsV1CalculateStatsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudContactcenterinsightsV1CalculateStatsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudContactcenterinsightsV1CalculateStatsResponse.class);
                res.googleCloudContactcenterinsightsV1CalculateStatsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * contactcenterinsightsProjectsLocationsConversationsCreate - Creates a conversation.
    **/
    public openapisdk.models.operations.ContactcenterinsightsProjectsLocationsConversationsCreateResponse contactcenterinsightsProjectsLocationsConversationsCreate(openapisdk.models.operations.ContactcenterinsightsProjectsLocationsConversationsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/conversations", request.pathParams);
        
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

        openapisdk.models.operations.ContactcenterinsightsProjectsLocationsConversationsCreateResponse res = new openapisdk.models.operations.ContactcenterinsightsProjectsLocationsConversationsCreateResponse() {{
            googleCloudContactcenterinsightsV1Conversation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudContactcenterinsightsV1Conversation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudContactcenterinsightsV1Conversation.class);
                res.googleCloudContactcenterinsightsV1Conversation = out;
            }
        }

        return res;
    }
	
	
    /**
     * contactcenterinsightsProjectsLocationsConversationsIngest - Imports conversations and processes them according to the user's configuration.
    **/
    public openapisdk.models.operations.ContactcenterinsightsProjectsLocationsConversationsIngestResponse contactcenterinsightsProjectsLocationsConversationsIngest(openapisdk.models.operations.ContactcenterinsightsProjectsLocationsConversationsIngestRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/conversations:ingest", request.pathParams);
        
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

        openapisdk.models.operations.ContactcenterinsightsProjectsLocationsConversationsIngestResponse res = new openapisdk.models.operations.ContactcenterinsightsProjectsLocationsConversationsIngestResponse() {{
            googleLongrunningOperation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleLongrunningOperation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleLongrunningOperation.class);
                res.googleLongrunningOperation = out;
            }
        }

        return res;
    }
	
	
    /**
     * contactcenterinsightsProjectsLocationsConversationsList - Lists conversations.
    **/
    public openapisdk.models.operations.ContactcenterinsightsProjectsLocationsConversationsListResponse contactcenterinsightsProjectsLocationsConversationsList(openapisdk.models.operations.ContactcenterinsightsProjectsLocationsConversationsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/conversations", request.pathParams);
        
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

        openapisdk.models.operations.ContactcenterinsightsProjectsLocationsConversationsListResponse res = new openapisdk.models.operations.ContactcenterinsightsProjectsLocationsConversationsListResponse() {{
            googleCloudContactcenterinsightsV1ListConversationsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudContactcenterinsightsV1ListConversationsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudContactcenterinsightsV1ListConversationsResponse.class);
                res.googleCloudContactcenterinsightsV1ListConversationsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * contactcenterinsightsProjectsLocationsInsightsdataExport - Export insights data to a destination defined in the request body.
    **/
    public openapisdk.models.operations.ContactcenterinsightsProjectsLocationsInsightsdataExportResponse contactcenterinsightsProjectsLocationsInsightsdataExport(openapisdk.models.operations.ContactcenterinsightsProjectsLocationsInsightsdataExportRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/insightsdata:export", request.pathParams);
        
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

        openapisdk.models.operations.ContactcenterinsightsProjectsLocationsInsightsdataExportResponse res = new openapisdk.models.operations.ContactcenterinsightsProjectsLocationsInsightsdataExportResponse() {{
            googleLongrunningOperation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleLongrunningOperation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleLongrunningOperation.class);
                res.googleLongrunningOperation = out;
            }
        }

        return res;
    }
	
	
    /**
     * contactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStats - Gets an issue model's statistics.
    **/
    public openapisdk.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStatsResponse contactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStats(openapisdk.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStatsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{issueModel}:calculateIssueModelStats", request.pathParams);
        
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

        openapisdk.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStatsResponse res = new openapisdk.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStatsResponse() {{
            googleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse.class);
                res.googleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * contactcenterinsightsProjectsLocationsIssueModelsCreate - Creates an issue model.
    **/
    public openapisdk.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsCreateResponse contactcenterinsightsProjectsLocationsIssueModelsCreate(openapisdk.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/issueModels", request.pathParams);
        
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

        openapisdk.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsCreateResponse res = new openapisdk.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsCreateResponse() {{
            googleLongrunningOperation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleLongrunningOperation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleLongrunningOperation.class);
                res.googleLongrunningOperation = out;
            }
        }

        return res;
    }
	
	
    /**
     * contactcenterinsightsProjectsLocationsIssueModelsDeploy - Deploys an issue model. Returns an error if a model is already deployed. An issue model can only be used in analysis after it has been deployed.
    **/
    public openapisdk.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsDeployResponse contactcenterinsightsProjectsLocationsIssueModelsDeploy(openapisdk.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsDeployRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}:deploy", request.pathParams);
        
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

        openapisdk.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsDeployResponse res = new openapisdk.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsDeployResponse() {{
            googleLongrunningOperation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleLongrunningOperation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleLongrunningOperation.class);
                res.googleLongrunningOperation = out;
            }
        }

        return res;
    }
	
	
    /**
     * contactcenterinsightsProjectsLocationsIssueModelsIssuesList - Lists issues.
    **/
    public openapisdk.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsIssuesListResponse contactcenterinsightsProjectsLocationsIssueModelsIssuesList(openapisdk.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsIssuesListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/issues", request.pathParams);
        
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

        openapisdk.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsIssuesListResponse res = new openapisdk.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsIssuesListResponse() {{
            googleCloudContactcenterinsightsV1ListIssuesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudContactcenterinsightsV1ListIssuesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudContactcenterinsightsV1ListIssuesResponse.class);
                res.googleCloudContactcenterinsightsV1ListIssuesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * contactcenterinsightsProjectsLocationsIssueModelsList - Lists issue models.
    **/
    public openapisdk.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsListResponse contactcenterinsightsProjectsLocationsIssueModelsList(openapisdk.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/issueModels", request.pathParams);
        
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

        openapisdk.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsListResponse res = new openapisdk.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsListResponse() {{
            googleCloudContactcenterinsightsV1ListIssueModelsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudContactcenterinsightsV1ListIssueModelsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudContactcenterinsightsV1ListIssueModelsResponse.class);
                res.googleCloudContactcenterinsightsV1ListIssueModelsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * contactcenterinsightsProjectsLocationsIssueModelsUndeploy - Undeploys an issue model. An issue model can not be used in analysis after it has been undeployed.
    **/
    public openapisdk.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsUndeployResponse contactcenterinsightsProjectsLocationsIssueModelsUndeploy(openapisdk.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsUndeployRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}:undeploy", request.pathParams);
        
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

        openapisdk.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsUndeployResponse res = new openapisdk.models.operations.ContactcenterinsightsProjectsLocationsIssueModelsUndeployResponse() {{
            googleLongrunningOperation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleLongrunningOperation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleLongrunningOperation.class);
                res.googleLongrunningOperation = out;
            }
        }

        return res;
    }
	
	
    /**
     * contactcenterinsightsProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    public openapisdk.models.operations.ContactcenterinsightsProjectsLocationsOperationsCancelResponse contactcenterinsightsProjectsLocationsOperationsCancel(openapisdk.models.operations.ContactcenterinsightsProjectsLocationsOperationsCancelRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}:cancel", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
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

        openapisdk.models.operations.ContactcenterinsightsProjectsLocationsOperationsCancelResponse res = new openapisdk.models.operations.ContactcenterinsightsProjectsLocationsOperationsCancelResponse() {{
            googleProtobufEmpty = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.googleProtobufEmpty = out;
            }
        }

        return res;
    }
	
	
    /**
     * contactcenterinsightsProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    public openapisdk.models.operations.ContactcenterinsightsProjectsLocationsOperationsListResponse contactcenterinsightsProjectsLocationsOperationsList(openapisdk.models.operations.ContactcenterinsightsProjectsLocationsOperationsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}/operations", request.pathParams);
        
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

        openapisdk.models.operations.ContactcenterinsightsProjectsLocationsOperationsListResponse res = new openapisdk.models.operations.ContactcenterinsightsProjectsLocationsOperationsListResponse() {{
            googleLongrunningListOperationsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleLongrunningListOperationsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleLongrunningListOperationsResponse.class);
                res.googleLongrunningListOperationsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * contactcenterinsightsProjectsLocationsPhraseMatchersCreate - Creates a phrase matcher.
    **/
    public openapisdk.models.operations.ContactcenterinsightsProjectsLocationsPhraseMatchersCreateResponse contactcenterinsightsProjectsLocationsPhraseMatchersCreate(openapisdk.models.operations.ContactcenterinsightsProjectsLocationsPhraseMatchersCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/phraseMatchers", request.pathParams);
        
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

        openapisdk.models.operations.ContactcenterinsightsProjectsLocationsPhraseMatchersCreateResponse res = new openapisdk.models.operations.ContactcenterinsightsProjectsLocationsPhraseMatchersCreateResponse() {{
            googleCloudContactcenterinsightsV1PhraseMatcher = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudContactcenterinsightsV1PhraseMatcher out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudContactcenterinsightsV1PhraseMatcher.class);
                res.googleCloudContactcenterinsightsV1PhraseMatcher = out;
            }
        }

        return res;
    }
	
	
    /**
     * contactcenterinsightsProjectsLocationsPhraseMatchersList - Lists phrase matchers.
    **/
    public openapisdk.models.operations.ContactcenterinsightsProjectsLocationsPhraseMatchersListResponse contactcenterinsightsProjectsLocationsPhraseMatchersList(openapisdk.models.operations.ContactcenterinsightsProjectsLocationsPhraseMatchersListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/phraseMatchers", request.pathParams);
        
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

        openapisdk.models.operations.ContactcenterinsightsProjectsLocationsPhraseMatchersListResponse res = new openapisdk.models.operations.ContactcenterinsightsProjectsLocationsPhraseMatchersListResponse() {{
            googleCloudContactcenterinsightsV1ListPhraseMatchersResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse.class);
                res.googleCloudContactcenterinsightsV1ListPhraseMatchersResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * contactcenterinsightsProjectsLocationsViewsCreate - Creates a view.
    **/
    public openapisdk.models.operations.ContactcenterinsightsProjectsLocationsViewsCreateResponse contactcenterinsightsProjectsLocationsViewsCreate(openapisdk.models.operations.ContactcenterinsightsProjectsLocationsViewsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/views", request.pathParams);
        
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

        openapisdk.models.operations.ContactcenterinsightsProjectsLocationsViewsCreateResponse res = new openapisdk.models.operations.ContactcenterinsightsProjectsLocationsViewsCreateResponse() {{
            googleCloudContactcenterinsightsV1View = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudContactcenterinsightsV1View out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudContactcenterinsightsV1View.class);
                res.googleCloudContactcenterinsightsV1View = out;
            }
        }

        return res;
    }
	
	
    /**
     * contactcenterinsightsProjectsLocationsViewsDelete - Deletes a view.
    **/
    public openapisdk.models.operations.ContactcenterinsightsProjectsLocationsViewsDeleteResponse contactcenterinsightsProjectsLocationsViewsDelete(openapisdk.models.operations.ContactcenterinsightsProjectsLocationsViewsDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}", request.pathParams);
        
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

        openapisdk.models.operations.ContactcenterinsightsProjectsLocationsViewsDeleteResponse res = new openapisdk.models.operations.ContactcenterinsightsProjectsLocationsViewsDeleteResponse() {{
            googleProtobufEmpty = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.googleProtobufEmpty = out;
            }
        }

        return res;
    }
	
	
    /**
     * contactcenterinsightsProjectsLocationsViewsGet - Gets a view.
    **/
    public openapisdk.models.operations.ContactcenterinsightsProjectsLocationsViewsGetResponse contactcenterinsightsProjectsLocationsViewsGet(openapisdk.models.operations.ContactcenterinsightsProjectsLocationsViewsGetRequest request) throws Exception {
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
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ContactcenterinsightsProjectsLocationsViewsGetResponse res = new openapisdk.models.operations.ContactcenterinsightsProjectsLocationsViewsGetResponse() {{
            googleCloudContactcenterinsightsV1View = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudContactcenterinsightsV1View out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudContactcenterinsightsV1View.class);
                res.googleCloudContactcenterinsightsV1View = out;
            }
        }

        return res;
    }
	
	
    /**
     * contactcenterinsightsProjectsLocationsViewsList - Lists views.
    **/
    public openapisdk.models.operations.ContactcenterinsightsProjectsLocationsViewsListResponse contactcenterinsightsProjectsLocationsViewsList(openapisdk.models.operations.ContactcenterinsightsProjectsLocationsViewsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/views", request.pathParams);
        
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

        openapisdk.models.operations.ContactcenterinsightsProjectsLocationsViewsListResponse res = new openapisdk.models.operations.ContactcenterinsightsProjectsLocationsViewsListResponse() {{
            googleCloudContactcenterinsightsV1ListViewsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudContactcenterinsightsV1ListViewsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudContactcenterinsightsV1ListViewsResponse.class);
                res.googleCloudContactcenterinsightsV1ListViewsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * contactcenterinsightsProjectsLocationsViewsPatch - Updates a view.
    **/
    public openapisdk.models.operations.ContactcenterinsightsProjectsLocationsViewsPatchResponse contactcenterinsightsProjectsLocationsViewsPatch(openapisdk.models.operations.ContactcenterinsightsProjectsLocationsViewsPatchRequest request) throws Exception {
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
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ContactcenterinsightsProjectsLocationsViewsPatchResponse res = new openapisdk.models.operations.ContactcenterinsightsProjectsLocationsViewsPatchResponse() {{
            googleCloudContactcenterinsightsV1View = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudContactcenterinsightsV1View out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudContactcenterinsightsV1View.class);
                res.googleCloudContactcenterinsightsV1View = out;
            }
        }

        return res;
    }
	
}