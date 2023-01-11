package openapisdk.models.operations;



public class GetNetworkSmUserAccessDevicesResponse {
    public String contentType;
    public GetNetworkSmUserAccessDevicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetNetworkSmUserAccessDevicesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetNetworkSmUserAccessDevicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkSmUserAccessDevices200ApplicationJSONObject;
    public GetNetworkSmUserAccessDevicesResponse withGetNetworkSmUserAccessDevices200ApplicationJsonObject(java.util.Map<String, Object> getNetworkSmUserAccessDevices200ApplicationJSONObject) {
        this.getNetworkSmUserAccessDevices200ApplicationJSONObject = getNetworkSmUserAccessDevices200ApplicationJSONObject;
        return this;
    }
}