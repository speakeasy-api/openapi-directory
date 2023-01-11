package openapisdk.models.operations;



public class GetNetworkAlertsSettingsResponse {
    public String contentType;
    public GetNetworkAlertsSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNetworkAlertsSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkAlertsSettings200ApplicationJSONObject;
    public GetNetworkAlertsSettingsResponse withGetNetworkAlertsSettings200ApplicationJsonObject(java.util.Map<String, Object> getNetworkAlertsSettings200ApplicationJSONObject) {
        this.getNetworkAlertsSettings200ApplicationJSONObject = getNetworkAlertsSettings200ApplicationJSONObject;
        return this;
    }
}