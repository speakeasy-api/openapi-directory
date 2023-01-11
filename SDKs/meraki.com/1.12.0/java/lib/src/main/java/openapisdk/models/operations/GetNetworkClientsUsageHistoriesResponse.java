package openapisdk.models.operations;



public class GetNetworkClientsUsageHistoriesResponse {
    public String contentType;
    public GetNetworkClientsUsageHistoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetNetworkClientsUsageHistoriesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetNetworkClientsUsageHistoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkClientsUsageHistories200ApplicationJSONObject;
    public GetNetworkClientsUsageHistoriesResponse withGetNetworkClientsUsageHistories200ApplicationJsonObject(java.util.Map<String, Object> getNetworkClientsUsageHistories200ApplicationJSONObject) {
        this.getNetworkClientsUsageHistories200ApplicationJSONObject = getNetworkClientsUsageHistories200ApplicationJSONObject;
        return this;
    }
}