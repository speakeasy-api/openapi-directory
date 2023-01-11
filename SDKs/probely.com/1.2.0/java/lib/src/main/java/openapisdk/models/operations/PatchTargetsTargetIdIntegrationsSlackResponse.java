package openapisdk.models.operations;



public class PatchTargetsTargetIdIntegrationsSlackResponse {
    public String contentType;
    public PatchTargetsTargetIdIntegrationsSlackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Slack slack;
    public PatchTargetsTargetIdIntegrationsSlackResponse withSlack(openapisdk.models.shared.Slack slack) {
        this.slack = slack;
        return this;
    }
    public Long statusCode;
    public PatchTargetsTargetIdIntegrationsSlackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PatchTargetsTargetIdIntegrationsSlack401ApplicationJson patchTargetsTargetIdIntegrationsSlack401ApplicationJSONObject;
    public PatchTargetsTargetIdIntegrationsSlackResponse withPatchTargetsTargetIdIntegrationsSlack401ApplicationJsonObject(PatchTargetsTargetIdIntegrationsSlack401ApplicationJson patchTargetsTargetIdIntegrationsSlack401ApplicationJSONObject) {
        this.patchTargetsTargetIdIntegrationsSlack401ApplicationJSONObject = patchTargetsTargetIdIntegrationsSlack401ApplicationJSONObject;
        return this;
    }
    public PatchTargetsTargetIdIntegrationsSlack403ApplicationJson patchTargetsTargetIdIntegrationsSlack403ApplicationJSONObject;
    public PatchTargetsTargetIdIntegrationsSlackResponse withPatchTargetsTargetIdIntegrationsSlack403ApplicationJsonObject(PatchTargetsTargetIdIntegrationsSlack403ApplicationJson patchTargetsTargetIdIntegrationsSlack403ApplicationJSONObject) {
        this.patchTargetsTargetIdIntegrationsSlack403ApplicationJSONObject = patchTargetsTargetIdIntegrationsSlack403ApplicationJSONObject;
        return this;
    }
    public PatchTargetsTargetIdIntegrationsSlack404ApplicationJson patchTargetsTargetIdIntegrationsSlack404ApplicationJSONObject;
    public PatchTargetsTargetIdIntegrationsSlackResponse withPatchTargetsTargetIdIntegrationsSlack404ApplicationJsonObject(PatchTargetsTargetIdIntegrationsSlack404ApplicationJson patchTargetsTargetIdIntegrationsSlack404ApplicationJSONObject) {
        this.patchTargetsTargetIdIntegrationsSlack404ApplicationJSONObject = patchTargetsTargetIdIntegrationsSlack404ApplicationJSONObject;
        return this;
    }
}