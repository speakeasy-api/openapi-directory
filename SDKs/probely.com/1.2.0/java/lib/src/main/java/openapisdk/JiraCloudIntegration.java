package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class JiraCloudIntegration {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public JiraCloudIntegration(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getIntegrationsJiraCloudProjects - List Jira Projects
    **/
    public openapisdk.models.operations.GetIntegrationsJiraCloudProjectsResponse getIntegrationsJiraCloudProjects() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/integrations/jira-cloud/projects/");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetIntegrationsJiraCloudProjectsResponse res = new openapisdk.models.operations.GetIntegrationsJiraCloudProjectsResponse() {{
            jiraProjects = null;
            getIntegrationsJiraCloudProjects401ApplicationJSONObject = null;
            getIntegrationsJiraCloudProjects403ApplicationJSONObject = null;
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
                openapisdk.models.operations.GetIntegrationsJiraCloudProjects401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetIntegrationsJiraCloudProjects401ApplicationJson.class);
                res.getIntegrationsJiraCloudProjects401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetIntegrationsJiraCloudProjects403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetIntegrationsJiraCloudProjects403ApplicationJson.class);
                res.getIntegrationsJiraCloudProjects403ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getIntegrationsJiraCloudProjectsProjectIdIssueTypes - Retrieve project issue types
    **/
    public openapisdk.models.operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypesResponse getIntegrationsJiraCloudProjectsProjectIdIssueTypes(openapisdk.models.operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/integrations/jira-cloud/projects/{project_id}/issue_types/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypesResponse res = new openapisdk.models.operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypesResponse() {{
            jiraIssueTypes = null;
            getIntegrationsJiraCloudProjectsProjectIdIssueTypes401ApplicationJSONObject = null;
            getIntegrationsJiraCloudProjectsProjectIdIssueTypes403ApplicationJSONObject = null;
            getIntegrationsJiraCloudProjectsProjectIdIssueTypes404ApplicationJSONObject = null;
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
                openapisdk.models.operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypes401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypes401ApplicationJson.class);
                res.getIntegrationsJiraCloudProjectsProjectIdIssueTypes401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypes403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypes403ApplicationJson.class);
                res.getIntegrationsJiraCloudProjectsProjectIdIssueTypes403ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypes404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypes404ApplicationJson.class);
                res.getIntegrationsJiraCloudProjectsProjectIdIssueTypes404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPriorities - Retrieve issue priorities
    **/
    public openapisdk.models.operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesResponse getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPriorities(openapisdk.models.operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/integrations/jira-cloud/projects/{project_id}/issue_types/{issue_type_id}/priorities/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesResponse res = new openapisdk.models.operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesResponse() {{
            jiraIssuePriorities = null;
            getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPriorities401ApplicationJSONObject = null;
            getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPriorities403ApplicationJSONObject = null;
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
                openapisdk.models.operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPriorities401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPriorities401ApplicationJson.class);
                res.getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPriorities401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPriorities403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPriorities403ApplicationJson.class);
                res.getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPriorities403ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus - Retrieve issue statuses
    **/
    public openapisdk.models.operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusResponse getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus(openapisdk.models.operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/integrations/jira-cloud/projects/{project_id}/issue_types/{issue_type_id}/status/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusResponse res = new openapisdk.models.operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusResponse() {{
            jiraIssueStatuses = null;
            getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus401ApplicationJSONObject = null;
            getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus403ApplicationJSONObject = null;
            getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus404ApplicationJSONObject = null;
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
                openapisdk.models.operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus401ApplicationJson.class);
                res.getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus403ApplicationJson.class);
                res.getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus403ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus404ApplicationJson.class);
                res.getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getTargetsTargetIdFindingsIdIntegrationsJiraCloud - Retrieve Jira Cloud finding configuration
    **/
    public openapisdk.models.operations.GetTargetsTargetIdFindingsIdIntegrationsJiraCloudResponse getTargetsTargetIdFindingsIdIntegrationsJiraCloud(openapisdk.models.operations.GetTargetsTargetIdFindingsIdIntegrationsJiraCloudRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/findings/{id}/integrations/jira-cloud/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTargetsTargetIdFindingsIdIntegrationsJiraCloudResponse res = new openapisdk.models.operations.GetTargetsTargetIdFindingsIdIntegrationsJiraCloudResponse() {{
            jiraFinding = null;
            getTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJSONObject = null;
            getTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJSONObject = null;
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
                openapisdk.models.operations.GetTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJson.class);
                res.getTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJson.class);
                res.getTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getTargetsTargetIdIntegrationsJiraCloud - Retrieve Jira Cloud Target configuration
    **/
    public openapisdk.models.operations.GetTargetsTargetIdIntegrationsJiraCloudResponse getTargetsTargetIdIntegrationsJiraCloud(openapisdk.models.operations.GetTargetsTargetIdIntegrationsJiraCloudRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/integrations/jira-cloud/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTargetsTargetIdIntegrationsJiraCloudResponse res = new openapisdk.models.operations.GetTargetsTargetIdIntegrationsJiraCloudResponse() {{
            jiraScope = null;
            getTargetsTargetIdIntegrationsJiraCloud401ApplicationJSONObject = null;
            getTargetsTargetIdIntegrationsJiraCloud403ApplicationJSONObject = null;
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
                openapisdk.models.operations.GetTargetsTargetIdIntegrationsJiraCloud401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdIntegrationsJiraCloud401ApplicationJson.class);
                res.getTargetsTargetIdIntegrationsJiraCloud401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdIntegrationsJiraCloud403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdIntegrationsJiraCloud403ApplicationJson.class);
                res.getTargetsTargetIdIntegrationsJiraCloud403ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * patchTargetsTargetIdFindingsIdIntegrationsJiraCloud - Update Jira Cloud finding configuration
    **/
    public openapisdk.models.operations.PatchTargetsTargetIdFindingsIdIntegrationsJiraCloudResponse patchTargetsTargetIdFindingsIdIntegrationsJiraCloud(openapisdk.models.operations.PatchTargetsTargetIdFindingsIdIntegrationsJiraCloudRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/findings/{id}/integrations/jira-cloud/", request.pathParams);
        
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

        openapisdk.models.operations.PatchTargetsTargetIdFindingsIdIntegrationsJiraCloudResponse res = new openapisdk.models.operations.PatchTargetsTargetIdFindingsIdIntegrationsJiraCloudResponse() {{
            jiraFinding = null;
            patchTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJSONObject = null;
            patchTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJSONObject = null;
            patchTargetsTargetIdFindingsIdIntegrationsJiraCloud404ApplicationJSONObject = null;
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
                openapisdk.models.operations.PatchTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PatchTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJson.class);
                res.patchTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PatchTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PatchTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJson.class);
                res.patchTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PatchTargetsTargetIdFindingsIdIntegrationsJiraCloud404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PatchTargetsTargetIdFindingsIdIntegrationsJiraCloud404ApplicationJson.class);
                res.patchTargetsTargetIdFindingsIdIntegrationsJiraCloud404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * patchTargetsTargetIdIntegrationsJiraCloud - Update Jira Cloud target configuration
    **/
    public openapisdk.models.operations.PatchTargetsTargetIdIntegrationsJiraCloudResponse patchTargetsTargetIdIntegrationsJiraCloud(openapisdk.models.operations.PatchTargetsTargetIdIntegrationsJiraCloudRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/integrations/jira-cloud/", request.pathParams);
        
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

        openapisdk.models.operations.PatchTargetsTargetIdIntegrationsJiraCloudResponse res = new openapisdk.models.operations.PatchTargetsTargetIdIntegrationsJiraCloudResponse() {{
            jiraScope = null;
            patchTargetsTargetIdIntegrationsJiraCloud401ApplicationJSONObject = null;
            patchTargetsTargetIdIntegrationsJiraCloud403ApplicationJSONObject = null;
            patchTargetsTargetIdIntegrationsJiraCloud404ApplicationJSONObject = null;
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
                openapisdk.models.operations.PatchTargetsTargetIdIntegrationsJiraCloud401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PatchTargetsTargetIdIntegrationsJiraCloud401ApplicationJson.class);
                res.patchTargetsTargetIdIntegrationsJiraCloud401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PatchTargetsTargetIdIntegrationsJiraCloud403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PatchTargetsTargetIdIntegrationsJiraCloud403ApplicationJson.class);
                res.patchTargetsTargetIdIntegrationsJiraCloud403ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PatchTargetsTargetIdIntegrationsJiraCloud404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PatchTargetsTargetIdIntegrationsJiraCloud404ApplicationJson.class);
                res.patchTargetsTargetIdIntegrationsJiraCloud404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * putTargetsTargetIdFindingsIdIntegrationsJiraCloud - Update Jira Cloud finding configuration
    **/
    public openapisdk.models.operations.PutTargetsTargetIdFindingsIdIntegrationsJiraCloudResponse putTargetsTargetIdFindingsIdIntegrationsJiraCloud(openapisdk.models.operations.PutTargetsTargetIdFindingsIdIntegrationsJiraCloudRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/findings/{id}/integrations/jira-cloud/", request.pathParams);
        
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

        openapisdk.models.operations.PutTargetsTargetIdFindingsIdIntegrationsJiraCloudResponse res = new openapisdk.models.operations.PutTargetsTargetIdFindingsIdIntegrationsJiraCloudResponse() {{
            jiraFinding = null;
            putTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJSONObject = null;
            putTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJSONObject = null;
            putTargetsTargetIdFindingsIdIntegrationsJiraCloud404ApplicationJSONObject = null;
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
                openapisdk.models.operations.PutTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PutTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJson.class);
                res.putTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PutTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PutTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJson.class);
                res.putTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PutTargetsTargetIdFindingsIdIntegrationsJiraCloud404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PutTargetsTargetIdFindingsIdIntegrationsJiraCloud404ApplicationJson.class);
                res.putTargetsTargetIdFindingsIdIntegrationsJiraCloud404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * putTargetsTargetIdIntegrationsJiraCloud - Update Jira Cloud target configuration
    **/
    public openapisdk.models.operations.PutTargetsTargetIdIntegrationsJiraCloudResponse putTargetsTargetIdIntegrationsJiraCloud(openapisdk.models.operations.PutTargetsTargetIdIntegrationsJiraCloudRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/integrations/jira-cloud/", request.pathParams);
        
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

        openapisdk.models.operations.PutTargetsTargetIdIntegrationsJiraCloudResponse res = new openapisdk.models.operations.PutTargetsTargetIdIntegrationsJiraCloudResponse() {{
            jiraScope = null;
            putTargetsTargetIdIntegrationsJiraCloud401ApplicationJSONObject = null;
            putTargetsTargetIdIntegrationsJiraCloud403ApplicationJSONObject = null;
            putTargetsTargetIdIntegrationsJiraCloud404ApplicationJSONObject = null;
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
                openapisdk.models.operations.PutTargetsTargetIdIntegrationsJiraCloud401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PutTargetsTargetIdIntegrationsJiraCloud401ApplicationJson.class);
                res.putTargetsTargetIdIntegrationsJiraCloud401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PutTargetsTargetIdIntegrationsJiraCloud403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PutTargetsTargetIdIntegrationsJiraCloud403ApplicationJson.class);
                res.putTargetsTargetIdIntegrationsJiraCloud403ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PutTargetsTargetIdIntegrationsJiraCloud404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PutTargetsTargetIdIntegrationsJiraCloud404ApplicationJson.class);
                res.putTargetsTargetIdIntegrationsJiraCloud404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}