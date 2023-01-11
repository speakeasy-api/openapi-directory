package openapisdk.models.operations;



public class GetNetworkPiiRequestsResponse {
    public String contentType;
    public GetNetworkPiiRequestsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNetworkPiiRequestsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkPiiRequests200ApplicationJSONObject;
    public GetNetworkPiiRequestsResponse withGetNetworkPiiRequests200ApplicationJsonObject(java.util.Map<String, Object> getNetworkPiiRequests200ApplicationJSONObject) {
        this.getNetworkPiiRequests200ApplicationJSONObject = getNetworkPiiRequests200ApplicationJSONObject;
        return this;
    }
}