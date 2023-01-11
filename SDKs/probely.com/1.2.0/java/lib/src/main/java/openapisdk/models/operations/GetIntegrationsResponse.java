package openapisdk.models.operations;



public class GetIntegrationsResponse {
    public String contentType;
    public GetIntegrationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Integrations integrations;
    public GetIntegrationsResponse withIntegrations(openapisdk.models.shared.Integrations integrations) {
        this.integrations = integrations;
        return this;
    }
    public Long statusCode;
    public GetIntegrationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetIntegrations401ApplicationJson getIntegrations401ApplicationJSONObject;
    public GetIntegrationsResponse withGetIntegrations401ApplicationJsonObject(GetIntegrations401ApplicationJson getIntegrations401ApplicationJSONObject) {
        this.getIntegrations401ApplicationJSONObject = getIntegrations401ApplicationJSONObject;
        return this;
    }
    public GetIntegrations403ApplicationJson getIntegrations403ApplicationJSONObject;
    public GetIntegrationsResponse withGetIntegrations403ApplicationJsonObject(GetIntegrations403ApplicationJson getIntegrations403ApplicationJSONObject) {
        this.getIntegrations403ApplicationJSONObject = getIntegrations403ApplicationJSONObject;
        return this;
    }
}