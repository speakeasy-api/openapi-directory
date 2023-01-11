package openapisdk.models.operations;



public class GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesResponse {
    public String contentType;
    public GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.JiraIssuePriority[] jiraIssuePriorities;
    public GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesResponse withJiraIssuePriorities(openapisdk.models.shared.JiraIssuePriority[] jiraIssuePriorities) {
        this.jiraIssuePriorities = jiraIssuePriorities;
        return this;
    }
    public Long statusCode;
    public GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities401ApplicationJson getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities401ApplicationJSONObject;
    public GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesResponse withGetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities401ApplicationJsonObject(GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities401ApplicationJson getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities401ApplicationJSONObject) {
        this.getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities401ApplicationJSONObject = getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities401ApplicationJSONObject;
        return this;
    }
    public GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities403ApplicationJson getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities403ApplicationJSONObject;
    public GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesResponse withGetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities403ApplicationJsonObject(GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities403ApplicationJson getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities403ApplicationJSONObject) {
        this.getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities403ApplicationJSONObject = getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities403ApplicationJSONObject;
        return this;
    }
}