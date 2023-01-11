package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class JiraServerIntegration {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public JiraServerIntegration(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getIntegrationsJiraServerProjects - List Jira Projects
    **/
    public openapisdk.models.operations.GetIntegrationsJiraServerProjectsResponse getIntegrationsJiraServerProjects() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/integrations/jira-server/projects/");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetIntegrationsJiraServerProjectsResponse res = new openapisdk.models.operations.GetIntegrationsJiraServerProjectsResponse() {{
            jiraProjects = null;
            getIntegrationsJiraServerProjects401ApplicationJSONObject = null;
            getIntegrationsJiraServerProjects403ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.JiraProject[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.JiraProject[].class);
                res.jiraProjects = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetIntegrationsJiraServerProjects401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetIntegrationsJiraServerProjects401ApplicationJson.class);
                res.getIntegrationsJiraServerProjects401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetIntegrationsJiraServerProjects403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetIntegrationsJiraServerProjects403ApplicationJson.class);
                res.getIntegrationsJiraServerProjects403ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getIntegrationsJiraServerProjectsProjectIdIssueTypes - Retrieve project issue types
    **/
    public openapisdk.models.operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesResponse getIntegrationsJiraServerProjectsProjectIdIssueTypes(openapisdk.models.operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/integrations/jira-server/projects/{project_id}/issue_types/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesResponse res = new openapisdk.models.operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesResponse() {{
            jiraIssueTypes = null;
            getIntegrationsJiraServerProjectsProjectIdIssueTypes401ApplicationJSONObject = null;
            getIntegrationsJiraServerProjectsProjectIdIssueTypes403ApplicationJSONObject = null;
            getIntegrationsJiraServerProjectsProjectIdIssueTypes404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.JiraIssueType[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.JiraIssueType[].class);
                res.jiraIssueTypes = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypes401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypes401ApplicationJson.class);
                res.getIntegrationsJiraServerProjectsProjectIdIssueTypes401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypes403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypes403ApplicationJson.class);
                res.getIntegrationsJiraServerProjectsProjectIdIssueTypes403ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypes404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypes404ApplicationJson.class);
                res.getIntegrationsJiraServerProjectsProjectIdIssueTypes404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities - Retrieve issue priorities
    **/
    public openapisdk.models.operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesResponse getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities(openapisdk.models.operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/integrations/jira-server/projects/{project_id}/issue_types/{issue_type_id}/priorities/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesResponse res = new openapisdk.models.operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesResponse() {{
            jiraIssuePriorities = null;
            getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities401ApplicationJSONObject = null;
            getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities403ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.JiraIssuePriority[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.JiraIssuePriority[].class);
                res.jiraIssuePriorities = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities401ApplicationJson.class);
                res.getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities403ApplicationJson.class);
                res.getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities403ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus - Retrieve issue statuses
    **/
    public openapisdk.models.operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusResponse getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus(openapisdk.models.operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/integrations/jira-server/projects/{project_id}/issue_types/{issue_type_id}/status/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusResponse res = new openapisdk.models.operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusResponse() {{
            jiraIssueStatuses = null;
            getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus401ApplicationJSONObject = null;
            getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus403ApplicationJSONObject = null;
            getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.JiraIssueStatus[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.JiraIssueStatus[].class);
                res.jiraIssueStatuses = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus401ApplicationJson.class);
                res.getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus403ApplicationJson.class);
                res.getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus403ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus404ApplicationJson.class);
                res.getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getTargetsTargetIdFindingsIdIntegrationsJiraServer - Retrieve Jira Server finding configuration
    **/
    public openapisdk.models.operations.GetTargetsTargetIdFindingsIdIntegrationsJiraServerResponse getTargetsTargetIdFindingsIdIntegrationsJiraServer(openapisdk.models.operations.GetTargetsTargetIdFindingsIdIntegrationsJiraServerRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/findings/{id}/integrations/jira-server/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTargetsTargetIdFindingsIdIntegrationsJiraServerResponse res = new openapisdk.models.operations.GetTargetsTargetIdFindingsIdIntegrationsJiraServerResponse() {{
            jiraFinding = null;
            getTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJSONObject = null;
            getTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.JiraFinding out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.JiraFinding.class);
                res.jiraFinding = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJson.class);
                res.getTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJson.class);
                res.getTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getTargetsTargetIdIntegrationsJiraServer - Retrieve Jira Server Target configuration
    **/
    public openapisdk.models.operations.GetTargetsTargetIdIntegrationsJiraServerResponse getTargetsTargetIdIntegrationsJiraServer(openapisdk.models.operations.GetTargetsTargetIdIntegrationsJiraServerRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/integrations/jira-server/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTargetsTargetIdIntegrationsJiraServerResponse res = new openapisdk.models.operations.GetTargetsTargetIdIntegrationsJiraServerResponse() {{
            jiraScope = null;
            getTargetsTargetIdIntegrationsJiraServer401ApplicationJSONObject = null;
            getTargetsTargetIdIntegrationsJiraServer403ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.JiraScope out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.JiraScope.class);
                res.jiraScope = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdIntegrationsJiraServer401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdIntegrationsJiraServer401ApplicationJson.class);
                res.getTargetsTargetIdIntegrationsJiraServer401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdIntegrationsJiraServer403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdIntegrationsJiraServer403ApplicationJson.class);
                res.getTargetsTargetIdIntegrationsJiraServer403ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * patchTargetsTargetIdFindingsIdIntegrationsJiraServer - Update Jira Server finding configuration
    **/
    public openapisdk.models.operations.PatchTargetsTargetIdFindingsIdIntegrationsJiraServerResponse patchTargetsTargetIdFindingsIdIntegrationsJiraServer(openapisdk.models.operations.PatchTargetsTargetIdFindingsIdIntegrationsJiraServerRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/findings/{id}/integrations/jira-server/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PatchTargetsTargetIdFindingsIdIntegrationsJiraServerResponse res = new openapisdk.models.operations.PatchTargetsTargetIdFindingsIdIntegrationsJiraServerResponse() {{
            jiraFinding = null;
            patchTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJSONObject = null;
            patchTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJSONObject = null;
            patchTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.JiraFinding out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.JiraFinding.class);
                res.jiraFinding = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PatchTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PatchTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJson.class);
                res.patchTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PatchTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PatchTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJson.class);
                res.patchTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PatchTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PatchTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJson.class);
                res.patchTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * patchTargetsTargetIdIntegrationsJiraServer - Update Jira Server target configuration
    **/
    public openapisdk.models.operations.PatchTargetsTargetIdIntegrationsJiraServerResponse patchTargetsTargetIdIntegrationsJiraServer(openapisdk.models.operations.PatchTargetsTargetIdIntegrationsJiraServerRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/integrations/jira-server/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PatchTargetsTargetIdIntegrationsJiraServerResponse res = new openapisdk.models.operations.PatchTargetsTargetIdIntegrationsJiraServerResponse() {{
            jiraScope = null;
            patchTargetsTargetIdIntegrationsJiraServer401ApplicationJSONObject = null;
            patchTargetsTargetIdIntegrationsJiraServer403ApplicationJSONObject = null;
            patchTargetsTargetIdIntegrationsJiraServer404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.JiraScope out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.JiraScope.class);
                res.jiraScope = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PatchTargetsTargetIdIntegrationsJiraServer401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PatchTargetsTargetIdIntegrationsJiraServer401ApplicationJson.class);
                res.patchTargetsTargetIdIntegrationsJiraServer401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PatchTargetsTargetIdIntegrationsJiraServer403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PatchTargetsTargetIdIntegrationsJiraServer403ApplicationJson.class);
                res.patchTargetsTargetIdIntegrationsJiraServer403ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PatchTargetsTargetIdIntegrationsJiraServer404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PatchTargetsTargetIdIntegrationsJiraServer404ApplicationJson.class);
                res.patchTargetsTargetIdIntegrationsJiraServer404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * putTargetsTargetIdFindingsIdIntegrationsJiraServer - Update Jira Server finding configuration
    **/
    public openapisdk.models.operations.PutTargetsTargetIdFindingsIdIntegrationsJiraServerResponse putTargetsTargetIdFindingsIdIntegrationsJiraServer(openapisdk.models.operations.PutTargetsTargetIdFindingsIdIntegrationsJiraServerRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/findings/{id}/integrations/jira-server/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutTargetsTargetIdFindingsIdIntegrationsJiraServerResponse res = new openapisdk.models.operations.PutTargetsTargetIdFindingsIdIntegrationsJiraServerResponse() {{
            jiraFinding = null;
            putTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJSONObject = null;
            putTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJSONObject = null;
            putTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.JiraFinding out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.JiraFinding.class);
                res.jiraFinding = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PutTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PutTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJson.class);
                res.putTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PutTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PutTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJson.class);
                res.putTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PutTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PutTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJson.class);
                res.putTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * putTargetsTargetIdIntegrationsJiraServer - Update Jira Server target configuration
    **/
    public openapisdk.models.operations.PutTargetsTargetIdIntegrationsJiraServerResponse putTargetsTargetIdIntegrationsJiraServer(openapisdk.models.operations.PutTargetsTargetIdIntegrationsJiraServerRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/integrations/jira-server/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutTargetsTargetIdIntegrationsJiraServerResponse res = new openapisdk.models.operations.PutTargetsTargetIdIntegrationsJiraServerResponse() {{
            jiraScope = null;
            putTargetsTargetIdIntegrationsJiraServer401ApplicationJSONObject = null;
            putTargetsTargetIdIntegrationsJiraServer403ApplicationJSONObject = null;
            putTargetsTargetIdIntegrationsJiraServer404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.JiraScope out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.JiraScope.class);
                res.jiraScope = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PutTargetsTargetIdIntegrationsJiraServer401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PutTargetsTargetIdIntegrationsJiraServer401ApplicationJson.class);
                res.putTargetsTargetIdIntegrationsJiraServer401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PutTargetsTargetIdIntegrationsJiraServer403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PutTargetsTargetIdIntegrationsJiraServer403ApplicationJson.class);
                res.putTargetsTargetIdIntegrationsJiraServer403ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PutTargetsTargetIdIntegrationsJiraServer404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PutTargetsTargetIdIntegrationsJiraServer404ApplicationJson.class);
                res.putTargetsTargetIdIntegrationsJiraServer404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}