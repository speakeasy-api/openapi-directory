package openapisdk.models.operations;



public class GetNetworkSmDevicePerformanceHistoryResponse {
    public String contentType;
    public GetNetworkSmDevicePerformanceHistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetNetworkSmDevicePerformanceHistoryResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetNetworkSmDevicePerformanceHistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkSmDevicePerformanceHistory200ApplicationJSONObject;
    public GetNetworkSmDevicePerformanceHistoryResponse withGetNetworkSmDevicePerformanceHistory200ApplicationJsonObject(java.util.Map<String, Object> getNetworkSmDevicePerformanceHistory200ApplicationJSONObject) {
        this.getNetworkSmDevicePerformanceHistory200ApplicationJSONObject = getNetworkSmDevicePerformanceHistory200ApplicationJSONObject;
        return this;
    }
}