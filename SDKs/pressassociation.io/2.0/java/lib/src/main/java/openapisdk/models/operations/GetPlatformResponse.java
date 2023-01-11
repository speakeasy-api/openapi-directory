package openapisdk.models.operations;



public class GetPlatformResponse {
    public String contentType;
    public GetPlatformResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPlatformResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getPlatform200ApplicationJSONObject;
    public GetPlatformResponse withGetPlatform200ApplicationJsonObject(java.util.Map<String, Object> getPlatform200ApplicationJSONObject) {
        this.getPlatform200ApplicationJSONObject = getPlatform200ApplicationJSONObject;
        return this;
    }
}