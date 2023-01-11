package openapisdk.models.operations;



public class GetIntegrationsJiraCloudProjectsResponse {
    public String contentType;
    public GetIntegrationsJiraCloudProjectsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.JiraProject[] jiraProjects;
    public GetIntegrationsJiraCloudProjectsResponse withJiraProjects(openapisdk.models.shared.JiraProject[] jiraProjects) {
        this.jiraProjects = jiraProjects;
        return this;
    }
    public Long statusCode;
    public GetIntegrationsJiraCloudProjectsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetIntegrationsJiraCloudProjects401ApplicationJson getIntegrationsJiraCloudProjects401ApplicationJSONObject;
    public GetIntegrationsJiraCloudProjectsResponse withGetIntegrationsJiraCloudProjects401ApplicationJsonObject(GetIntegrationsJiraCloudProjects401ApplicationJson getIntegrationsJiraCloudProjects401ApplicationJSONObject) {
        this.getIntegrationsJiraCloudProjects401ApplicationJSONObject = getIntegrationsJiraCloudProjects401ApplicationJSONObject;
        return this;
    }
    public GetIntegrationsJiraCloudProjects403ApplicationJson getIntegrationsJiraCloudProjects403ApplicationJSONObject;
    public GetIntegrationsJiraCloudProjectsResponse withGetIntegrationsJiraCloudProjects403ApplicationJsonObject(GetIntegrationsJiraCloudProjects403ApplicationJson getIntegrationsJiraCloudProjects403ApplicationJSONObject) {
        this.getIntegrationsJiraCloudProjects403ApplicationJSONObject = getIntegrationsJiraCloudProjects403ApplicationJSONObject;
        return this;
    }
}