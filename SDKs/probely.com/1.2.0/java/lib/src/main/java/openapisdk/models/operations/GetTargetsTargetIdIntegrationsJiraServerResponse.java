package openapisdk.models.operations;



public class GetTargetsTargetIdIntegrationsJiraServerResponse {
    public String contentType;
    public GetTargetsTargetIdIntegrationsJiraServerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.JiraScope jiraScope;
    public GetTargetsTargetIdIntegrationsJiraServerResponse withJiraScope(openapisdk.models.shared.JiraScope jiraScope) {
        this.jiraScope = jiraScope;
        return this;
    }
    public Long statusCode;
    public GetTargetsTargetIdIntegrationsJiraServerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTargetsTargetIdIntegrationsJiraServer401ApplicationJson getTargetsTargetIdIntegrationsJiraServer401ApplicationJSONObject;
    public GetTargetsTargetIdIntegrationsJiraServerResponse withGetTargetsTargetIdIntegrationsJiraServer401ApplicationJsonObject(GetTargetsTargetIdIntegrationsJiraServer401ApplicationJson getTargetsTargetIdIntegrationsJiraServer401ApplicationJSONObject) {
        this.getTargetsTargetIdIntegrationsJiraServer401ApplicationJSONObject = getTargetsTargetIdIntegrationsJiraServer401ApplicationJSONObject;
        return this;
    }
    public GetTargetsTargetIdIntegrationsJiraServer403ApplicationJson getTargetsTargetIdIntegrationsJiraServer403ApplicationJSONObject;
    public GetTargetsTargetIdIntegrationsJiraServerResponse withGetTargetsTargetIdIntegrationsJiraServer403ApplicationJsonObject(GetTargetsTargetIdIntegrationsJiraServer403ApplicationJson getTargetsTargetIdIntegrationsJiraServer403ApplicationJSONObject) {
        this.getTargetsTargetIdIntegrationsJiraServer403ApplicationJSONObject = getTargetsTargetIdIntegrationsJiraServer403ApplicationJSONObject;
        return this;
    }
}