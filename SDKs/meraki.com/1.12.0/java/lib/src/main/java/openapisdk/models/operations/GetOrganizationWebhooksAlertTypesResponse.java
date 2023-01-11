package openapisdk.models.operations;



public class GetOrganizationWebhooksAlertTypesResponse {
    public String contentType;
    public GetOrganizationWebhooksAlertTypesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetOrganizationWebhooksAlertTypesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getOrganizationWebhooksAlertTypes200ApplicationJSONObject;
    public GetOrganizationWebhooksAlertTypesResponse withGetOrganizationWebhooksAlertTypes200ApplicationJsonObject(java.util.Map<String, Object> getOrganizationWebhooksAlertTypes200ApplicationJSONObject) {
        this.getOrganizationWebhooksAlertTypes200ApplicationJSONObject = getOrganizationWebhooksAlertTypes200ApplicationJSONObject;
        return this;
    }
}