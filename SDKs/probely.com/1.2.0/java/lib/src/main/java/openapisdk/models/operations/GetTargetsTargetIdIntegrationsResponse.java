package openapisdk.models.operations;



public class GetTargetsTargetIdIntegrationsResponse {
    public String contentType;
    public GetTargetsTargetIdIntegrationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Integrations integrations;
    public GetTargetsTargetIdIntegrationsResponse withIntegrations(openapisdk.models.shared.Integrations integrations) {
        this.integrations = integrations;
        return this;
    }
    public Long statusCode;
    public GetTargetsTargetIdIntegrationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTargetsTargetIdIntegrations401ApplicationJson getTargetsTargetIdIntegrations401ApplicationJSONObject;
    public GetTargetsTargetIdIntegrationsResponse withGetTargetsTargetIdIntegrations401ApplicationJsonObject(GetTargetsTargetIdIntegrations401ApplicationJson getTargetsTargetIdIntegrations401ApplicationJSONObject) {
        this.getTargetsTargetIdIntegrations401ApplicationJSONObject = getTargetsTargetIdIntegrations401ApplicationJSONObject;
        return this;
    }
    public GetTargetsTargetIdIntegrations403ApplicationJson getTargetsTargetIdIntegrations403ApplicationJSONObject;
    public GetTargetsTargetIdIntegrationsResponse withGetTargetsTargetIdIntegrations403ApplicationJsonObject(GetTargetsTargetIdIntegrations403ApplicationJson getTargetsTargetIdIntegrations403ApplicationJSONObject) {
        this.getTargetsTargetIdIntegrations403ApplicationJSONObject = getTargetsTargetIdIntegrations403ApplicationJSONObject;
        return this;
    }
}