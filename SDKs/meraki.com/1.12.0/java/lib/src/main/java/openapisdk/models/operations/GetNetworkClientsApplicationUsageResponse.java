package openapisdk.models.operations;



public class GetNetworkClientsApplicationUsageResponse {
    public String contentType;
    public GetNetworkClientsApplicationUsageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetNetworkClientsApplicationUsageResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetNetworkClientsApplicationUsageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkClientsApplicationUsage200ApplicationJSONObject;
    public GetNetworkClientsApplicationUsageResponse withGetNetworkClientsApplicationUsage200ApplicationJsonObject(java.util.Map<String, Object> getNetworkClientsApplicationUsage200ApplicationJSONObject) {
        this.getNetworkClientsApplicationUsage200ApplicationJSONObject = getNetworkClientsApplicationUsage200ApplicationJSONObject;
        return this;
    }
}