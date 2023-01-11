package openapisdk.models.operations;



public class GetDeviceLossAndLatencyHistoryResponse {
    public String contentType;
    public GetDeviceLossAndLatencyHistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDeviceLossAndLatencyHistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getDeviceLossAndLatencyHistory200ApplicationJSONObject;
    public GetDeviceLossAndLatencyHistoryResponse withGetDeviceLossAndLatencyHistory200ApplicationJsonObject(java.util.Map<String, Object> getDeviceLossAndLatencyHistory200ApplicationJSONObject) {
        this.getDeviceLossAndLatencyHistory200ApplicationJSONObject = getDeviceLossAndLatencyHistory200ApplicationJSONObject;
        return this;
    }
}