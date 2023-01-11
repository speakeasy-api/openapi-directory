package openapisdk.models.operations;



public class GetNetworkEventsResponse {
    public String contentType;
    public GetNetworkEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetNetworkEventsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetNetworkEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkEvents200ApplicationJSONObject;
    public GetNetworkEventsResponse withGetNetworkEvents200ApplicationJsonObject(java.util.Map<String, Object> getNetworkEvents200ApplicationJSONObject) {
        this.getNetworkEvents200ApplicationJSONObject = getNetworkEvents200ApplicationJSONObject;
        return this;
    }
}