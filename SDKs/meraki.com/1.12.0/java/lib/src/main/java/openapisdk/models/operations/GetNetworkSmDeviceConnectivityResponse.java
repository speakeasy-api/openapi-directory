package openapisdk.models.operations;



public class GetNetworkSmDeviceConnectivityResponse {
    public String contentType;
    public GetNetworkSmDeviceConnectivityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetNetworkSmDeviceConnectivityResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetNetworkSmDeviceConnectivityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkSmDeviceConnectivity200ApplicationJSONObject;
    public GetNetworkSmDeviceConnectivityResponse withGetNetworkSmDeviceConnectivity200ApplicationJsonObject(java.util.Map<String, Object> getNetworkSmDeviceConnectivity200ApplicationJSONObject) {
        this.getNetworkSmDeviceConnectivity200ApplicationJSONObject = getNetworkSmDeviceConnectivity200ApplicationJSONObject;
        return this;
    }
}