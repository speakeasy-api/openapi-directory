package openapisdk.models.operations;



public class GetNetworkSmDevicesResponse {
    public String contentType;
    public GetNetworkSmDevicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetNetworkSmDevicesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetNetworkSmDevicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkSmDevices200ApplicationJSONObject;
    public GetNetworkSmDevicesResponse withGetNetworkSmDevices200ApplicationJsonObject(java.util.Map<String, Object> getNetworkSmDevices200ApplicationJSONObject) {
        this.getNetworkSmDevices200ApplicationJSONObject = getNetworkSmDevices200ApplicationJSONObject;
        return this;
    }
}