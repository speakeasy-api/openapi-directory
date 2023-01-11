package openapisdk.models.operations;



public class GetTargetsTargetIdIntegrationsSlackResponse {
    public String contentType;
    public GetTargetsTargetIdIntegrationsSlackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Slack slack;
    public GetTargetsTargetIdIntegrationsSlackResponse withSlack(openapisdk.models.shared.Slack slack) {
        this.slack = slack;
        return this;
    }
    public Long statusCode;
    public GetTargetsTargetIdIntegrationsSlackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTargetsTargetIdIntegrationsSlack401ApplicationJson getTargetsTargetIdIntegrationsSlack401ApplicationJSONObject;
    public GetTargetsTargetIdIntegrationsSlackResponse withGetTargetsTargetIdIntegrationsSlack401ApplicationJsonObject(GetTargetsTargetIdIntegrationsSlack401ApplicationJson getTargetsTargetIdIntegrationsSlack401ApplicationJSONObject) {
        this.getTargetsTargetIdIntegrationsSlack401ApplicationJSONObject = getTargetsTargetIdIntegrationsSlack401ApplicationJSONObject;
        return this;
    }
    public GetTargetsTargetIdIntegrationsSlack403ApplicationJson getTargetsTargetIdIntegrationsSlack403ApplicationJSONObject;
    public GetTargetsTargetIdIntegrationsSlackResponse withGetTargetsTargetIdIntegrationsSlack403ApplicationJsonObject(GetTargetsTargetIdIntegrationsSlack403ApplicationJson getTargetsTargetIdIntegrationsSlack403ApplicationJSONObject) {
        this.getTargetsTargetIdIntegrationsSlack403ApplicationJSONObject = getTargetsTargetIdIntegrationsSlack403ApplicationJSONObject;
        return this;
    }
}