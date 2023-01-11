package openapisdk.models.operations;



public class GetNetworkWirelessSsidsResponse {
    public String contentType;
    public GetNetworkWirelessSsidsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNetworkWirelessSsidsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkWirelessSsids200ApplicationJSONObject;
    public GetNetworkWirelessSsidsResponse withGetNetworkWirelessSsids200ApplicationJsonObject(java.util.Map<String, Object> getNetworkWirelessSsids200ApplicationJSONObject) {
        this.getNetworkWirelessSsids200ApplicationJSONObject = getNetworkWirelessSsids200ApplicationJSONObject;
        return this;
    }
}