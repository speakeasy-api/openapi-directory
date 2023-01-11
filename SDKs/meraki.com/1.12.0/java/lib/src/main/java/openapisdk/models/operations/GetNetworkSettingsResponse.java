package openapisdk.models.operations;



public class GetNetworkSettingsResponse {
    public String contentType;
    public GetNetworkSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNetworkSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkSettings200ApplicationJSONObject;
    public GetNetworkSettingsResponse withGetNetworkSettings200ApplicationJsonObject(java.util.Map<String, Object> getNetworkSettings200ApplicationJSONObject) {
        this.getNetworkSettings200ApplicationJSONObject = getNetworkSettings200ApplicationJSONObject;
        return this;
    }
}