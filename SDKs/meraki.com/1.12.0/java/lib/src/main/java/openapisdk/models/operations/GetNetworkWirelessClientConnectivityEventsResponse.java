package openapisdk.models.operations;



public class GetNetworkWirelessClientConnectivityEventsResponse {
    public String contentType;
    public GetNetworkWirelessClientConnectivityEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetNetworkWirelessClientConnectivityEventsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetNetworkWirelessClientConnectivityEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkWirelessClientConnectivityEvents200ApplicationJSONObject;
    public GetNetworkWirelessClientConnectivityEventsResponse withGetNetworkWirelessClientConnectivityEvents200ApplicationJsonObject(java.util.Map<String, Object> getNetworkWirelessClientConnectivityEvents200ApplicationJSONObject) {
        this.getNetworkWirelessClientConnectivityEvents200ApplicationJSONObject = getNetworkWirelessClientConnectivityEvents200ApplicationJSONObject;
        return this;
    }
}