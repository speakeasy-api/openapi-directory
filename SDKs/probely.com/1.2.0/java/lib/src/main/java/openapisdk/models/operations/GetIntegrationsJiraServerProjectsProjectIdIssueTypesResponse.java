package openapisdk.models.operations;



public class GetIntegrationsJiraServerProjectsProjectIdIssueTypesResponse {
    public String contentType;
    public GetIntegrationsJiraServerProjectsProjectIdIssueTypesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.JiraIssueType[] jiraIssueTypes;
    public GetIntegrationsJiraServerProjectsProjectIdIssueTypesResponse withJiraIssueTypes(openapisdk.models.shared.JiraIssueType[] jiraIssueTypes) {
        this.jiraIssueTypes = jiraIssueTypes;
        return this;
    }
    public Long statusCode;
    public GetIntegrationsJiraServerProjectsProjectIdIssueTypesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetIntegrationsJiraServerProjectsProjectIdIssueTypes401ApplicationJson getIntegrationsJiraServerProjectsProjectIdIssueTypes401ApplicationJSONObject;
    public GetIntegrationsJiraServerProjectsProjectIdIssueTypesResponse withGetIntegrationsJiraServerProjectsProjectIdIssueTypes401ApplicationJsonObject(GetIntegrationsJiraServerProjectsProjectIdIssueTypes401ApplicationJson getIntegrationsJiraServerProjectsProjectIdIssueTypes401ApplicationJSONObject) {
        this.getIntegrationsJiraServerProjectsProjectIdIssueTypes401ApplicationJSONObject = getIntegrationsJiraServerProjectsProjectIdIssueTypes401ApplicationJSONObject;
        return this;
    }
    public GetIntegrationsJiraServerProjectsProjectIdIssueTypes403ApplicationJson getIntegrationsJiraServerProjectsProjectIdIssueTypes403ApplicationJSONObject;
    public GetIntegrationsJiraServerProjectsProjectIdIssueTypesResponse withGetIntegrationsJiraServerProjectsProjectIdIssueTypes403ApplicationJsonObject(GetIntegrationsJiraServerProjectsProjectIdIssueTypes403ApplicationJson getIntegrationsJiraServerProjectsProjectIdIssueTypes403ApplicationJSONObject) {
        this.getIntegrationsJiraServerProjectsProjectIdIssueTypes403ApplicationJSONObject = getIntegrationsJiraServerProjectsProjectIdIssueTypes403ApplicationJSONObject;
        return this;
    }
    public GetIntegrationsJiraServerProjectsProjectIdIssueTypes404ApplicationJson getIntegrationsJiraServerProjectsProjectIdIssueTypes404ApplicationJSONObject;
    public GetIntegrationsJiraServerProjectsProjectIdIssueTypesResponse withGetIntegrationsJiraServerProjectsProjectIdIssueTypes404ApplicationJsonObject(GetIntegrationsJiraServerProjectsProjectIdIssueTypes404ApplicationJson getIntegrationsJiraServerProjectsProjectIdIssueTypes404ApplicationJSONObject) {
        this.getIntegrationsJiraServerProjectsProjectIdIssueTypes404ApplicationJSONObject = getIntegrationsJiraServerProjectsProjectIdIssueTypes404ApplicationJSONObject;
        return this;
    }
}