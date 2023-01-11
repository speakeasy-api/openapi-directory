package openapisdk.models.operations;



public class SplitNetworkResponse {
    public String contentType;
    public SplitNetworkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SplitNetworkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> splitNetwork200ApplicationJSONObject;
    public SplitNetworkResponse withSplitNetwork200ApplicationJsonObject(java.util.Map<String, Object> splitNetwork200ApplicationJSONObject) {
        this.splitNetwork200ApplicationJSONObject = splitNetwork200ApplicationJSONObject;
        return this;
    }
}