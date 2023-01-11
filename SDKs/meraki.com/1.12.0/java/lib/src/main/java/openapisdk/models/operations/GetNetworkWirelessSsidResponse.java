package openapisdk.models.operations;



public class GetNetworkWirelessSsidResponse {
    public String contentType;
    public GetNetworkWirelessSsidResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNetworkWirelessSsidResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkWirelessSsid200ApplicationJSONObject;
    public GetNetworkWirelessSsidResponse withGetNetworkWirelessSsid200ApplicationJsonObject(java.util.Map<String, Object> getNetworkWirelessSsid200ApplicationJSONObject) {
        this.getNetworkWirelessSsid200ApplicationJSONObject = getNetworkWirelessSsid200ApplicationJSONObject;
        return this;
    }
}