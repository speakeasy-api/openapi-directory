package openapisdk.models.operations;



public class GetNetworkWirelessSettingsResponse {
    public String contentType;
    public GetNetworkWirelessSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNetworkWirelessSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkWirelessSettings200ApplicationJSONObject;
    public GetNetworkWirelessSettingsResponse withGetNetworkWirelessSettings200ApplicationJsonObject(java.util.Map<String, Object> getNetworkWirelessSettings200ApplicationJSONObject) {
        this.getNetworkWirelessSettings200ApplicationJSONObject = getNetworkWirelessSettings200ApplicationJSONObject;
        return this;
    }
}