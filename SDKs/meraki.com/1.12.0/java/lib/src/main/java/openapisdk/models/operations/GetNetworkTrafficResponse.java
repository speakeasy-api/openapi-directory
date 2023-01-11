package openapisdk.models.operations;



public class GetNetworkTrafficResponse {
    public String contentType;
    public GetNetworkTrafficResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNetworkTrafficResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkTraffic200ApplicationJSONObject;
    public GetNetworkTrafficResponse withGetNetworkTraffic200ApplicationJsonObject(java.util.Map<String, Object> getNetworkTraffic200ApplicationJSONObject) {
        this.getNetworkTraffic200ApplicationJSONObject = getNetworkTraffic200ApplicationJSONObject;
        return this;
    }
}