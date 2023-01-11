package openapisdk.models.operations;



public class GetIntegrationsJiraServerProjectsResponse {
    public String contentType;
    public GetIntegrationsJiraServerProjectsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.JiraProject[] jiraProjects;
    public GetIntegrationsJiraServerProjectsResponse withJiraProjects(openapisdk.models.shared.JiraProject[] jiraProjects) {
        this.jiraProjects = jiraProjects;
        return this;
    }
    public Long statusCode;
    public GetIntegrationsJiraServerProjectsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetIntegrationsJiraServerProjects401ApplicationJson getIntegrationsJiraServerProjects401ApplicationJSONObject;
    public GetIntegrationsJiraServerProjectsResponse withGetIntegrationsJiraServerProjects401ApplicationJsonObject(GetIntegrationsJiraServerProjects401ApplicationJson getIntegrationsJiraServerProjects401ApplicationJSONObject) {
        this.getIntegrationsJiraServerProjects401ApplicationJSONObject = getIntegrationsJiraServerProjects401ApplicationJSONObject;
        return this;
    }
    public GetIntegrationsJiraServerProjects403ApplicationJson getIntegrationsJiraServerProjects403ApplicationJSONObject;
    public GetIntegrationsJiraServerProjectsResponse withGetIntegrationsJiraServerProjects403ApplicationJsonObject(GetIntegrationsJiraServerProjects403ApplicationJson getIntegrationsJiraServerProjects403ApplicationJSONObject) {
        this.getIntegrationsJiraServerProjects403ApplicationJSONObject = getIntegrationsJiraServerProjects403ApplicationJSONObject;
        return this;
    }
}