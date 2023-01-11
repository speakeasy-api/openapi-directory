package openapisdk.models.operations;



public class GetNetworkClientTrafficHistoryResponse {
    public String contentType;
    public GetNetworkClientTrafficHistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetNetworkClientTrafficHistoryResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetNetworkClientTrafficHistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkClientTrafficHistory200ApplicationJSONObject;
    public GetNetworkClientTrafficHistoryResponse withGetNetworkClientTrafficHistory200ApplicationJsonObject(java.util.Map<String, Object> getNetworkClientTrafficHistory200ApplicationJSONObject) {
        this.getNetworkClientTrafficHistory200ApplicationJSONObject = getNetworkClientTrafficHistory200ApplicationJSONObject;
        return this;
    }
}