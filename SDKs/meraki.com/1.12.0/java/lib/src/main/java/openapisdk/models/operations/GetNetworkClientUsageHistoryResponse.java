package openapisdk.models.operations;



public class GetNetworkClientUsageHistoryResponse {
    public String contentType;
    public GetNetworkClientUsageHistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNetworkClientUsageHistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkClientUsageHistory200ApplicationJSONObject;
    public GetNetworkClientUsageHistoryResponse withGetNetworkClientUsageHistory200ApplicationJsonObject(java.util.Map<String, Object> getNetworkClientUsageHistory200ApplicationJSONObject) {
        this.getNetworkClientUsageHistory200ApplicationJSONObject = getNetworkClientUsageHistory200ApplicationJSONObject;
        return this;
    }
}