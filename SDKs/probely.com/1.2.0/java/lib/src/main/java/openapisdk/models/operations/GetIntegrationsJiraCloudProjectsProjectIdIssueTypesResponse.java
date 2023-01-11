package openapisdk.models.operations;



public class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesResponse {
    public String contentType;
    public GetIntegrationsJiraCloudProjectsProjectIdIssueTypesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.JiraIssueType[] jiraIssueTypes;
    public GetIntegrationsJiraCloudProjectsProjectIdIssueTypesResponse withJiraIssueTypes(openapisdk.models.shared.JiraIssueType[] jiraIssueTypes) {
        this.jiraIssueTypes = jiraIssueTypes;
        return this;
    }
    public Long statusCode;
    public GetIntegrationsJiraCloudProjectsProjectIdIssueTypesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetIntegrationsJiraCloudProjectsProjectIdIssueTypes401ApplicationJson getIntegrationsJiraCloudProjectsProjectIdIssueTypes401ApplicationJSONObject;
    public GetIntegrationsJiraCloudProjectsProjectIdIssueTypesResponse withGetIntegrationsJiraCloudProjectsProjectIdIssueTypes401ApplicationJsonObject(GetIntegrationsJiraCloudProjectsProjectIdIssueTypes401ApplicationJson getIntegrationsJiraCloudProjectsProjectIdIssueTypes401ApplicationJSONObject) {
        this.getIntegrationsJiraCloudProjectsProjectIdIssueTypes401ApplicationJSONObject = getIntegrationsJiraCloudProjectsProjectIdIssueTypes401ApplicationJSONObject;
        return this;
    }
    public GetIntegrationsJiraCloudProjectsProjectIdIssueTypes403ApplicationJson getIntegrationsJiraCloudProjectsProjectIdIssueTypes403ApplicationJSONObject;
    public GetIntegrationsJiraCloudProjectsProjectIdIssueTypesResponse withGetIntegrationsJiraCloudProjectsProjectIdIssueTypes403ApplicationJsonObject(GetIntegrationsJiraCloudProjectsProjectIdIssueTypes403ApplicationJson getIntegrationsJiraCloudProjectsProjectIdIssueTypes403ApplicationJSONObject) {
        this.getIntegrationsJiraCloudProjectsProjectIdIssueTypes403ApplicationJSONObject = getIntegrationsJiraCloudProjectsProjectIdIssueTypes403ApplicationJSONObject;
        return this;
    }
    public GetIntegrationsJiraCloudProjectsProjectIdIssueTypes404ApplicationJson getIntegrationsJiraCloudProjectsProjectIdIssueTypes404ApplicationJSONObject;
    public GetIntegrationsJiraCloudProjectsProjectIdIssueTypesResponse withGetIntegrationsJiraCloudProjectsProjectIdIssueTypes404ApplicationJsonObject(GetIntegrationsJiraCloudProjectsProjectIdIssueTypes404ApplicationJson getIntegrationsJiraCloudProjectsProjectIdIssueTypes404ApplicationJSONObject) {
        this.getIntegrationsJiraCloudProjectsProjectIdIssueTypes404ApplicationJSONObject = getIntegrationsJiraCloudProjectsProjectIdIssueTypes404ApplicationJSONObject;
        return this;
    }
}