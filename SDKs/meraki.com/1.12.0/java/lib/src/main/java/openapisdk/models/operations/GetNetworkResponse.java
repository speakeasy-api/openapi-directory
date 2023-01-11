package openapisdk.models.operations;



public class GetNetworkResponse {
    public String contentType;
    public GetNetworkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNetworkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetwork200ApplicationJSONObject;
    public GetNetworkResponse withGetNetwork200ApplicationJsonObject(java.util.Map<String, Object> getNetwork200ApplicationJSONObject) {
        this.getNetwork200ApplicationJSONObject = getNetwork200ApplicationJSONObject;
        return this;
    }
}