package openapisdk.models.operations;



public class GetNetworkWirelessMeshStatusesResponse {
    public String contentType;
    public GetNetworkWirelessMeshStatusesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetNetworkWirelessMeshStatusesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetNetworkWirelessMeshStatusesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkWirelessMeshStatuses200ApplicationJSONObject;
    public GetNetworkWirelessMeshStatusesResponse withGetNetworkWirelessMeshStatuses200ApplicationJsonObject(java.util.Map<String, Object> getNetworkWirelessMeshStatuses200ApplicationJSONObject) {
        this.getNetworkWirelessMeshStatuses200ApplicationJSONObject = getNetworkWirelessMeshStatuses200ApplicationJSONObject;
        return this;
    }
}