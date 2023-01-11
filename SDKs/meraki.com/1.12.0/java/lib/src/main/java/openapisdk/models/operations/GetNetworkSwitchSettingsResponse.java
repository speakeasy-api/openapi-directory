package openapisdk.models.operations;



public class GetNetworkSwitchSettingsResponse {
    public String contentType;
    public GetNetworkSwitchSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNetworkSwitchSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkSwitchSettings200ApplicationJSONObject;
    public GetNetworkSwitchSettingsResponse withGetNetworkSwitchSettings200ApplicationJsonObject(java.util.Map<String, Object> getNetworkSwitchSettings200ApplicationJSONObject) {
        this.getNetworkSwitchSettings200ApplicationJSONObject = getNetworkSwitchSettings200ApplicationJSONObject;
        return this;
    }
}