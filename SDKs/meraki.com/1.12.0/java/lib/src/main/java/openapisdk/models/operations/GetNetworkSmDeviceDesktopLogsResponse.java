package openapisdk.models.operations;



public class GetNetworkSmDeviceDesktopLogsResponse {
    public String contentType;
    public GetNetworkSmDeviceDesktopLogsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetNetworkSmDeviceDesktopLogsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetNetworkSmDeviceDesktopLogsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkSmDeviceDesktopLogs200ApplicationJSONObject;
    public GetNetworkSmDeviceDesktopLogsResponse withGetNetworkSmDeviceDesktopLogs200ApplicationJsonObject(java.util.Map<String, Object> getNetworkSmDeviceDesktopLogs200ApplicationJSONObject) {
        this.getNetworkSmDeviceDesktopLogs200ApplicationJSONObject = getNetworkSmDeviceDesktopLogs200ApplicationJSONObject;
        return this;
    }
}