package openapisdk.models.operations;



public class PostCheckResponse {
    public String contentType;
    public PostCheckResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCheckResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostCheck200ApplicationJson postCheck200ApplicationJSONObject;
    public PostCheckResponse withPostCheck200ApplicationJsonObject(PostCheck200ApplicationJson postCheck200ApplicationJSONObject) {
        this.postCheck200ApplicationJSONObject = postCheck200ApplicationJSONObject;
        return this;
    }
    public PostCheck400ApplicationJson postCheck400ApplicationJSONObject;
    public PostCheckResponse withPostCheck400ApplicationJsonObject(PostCheck400ApplicationJson postCheck400ApplicationJSONObject) {
        this.postCheck400ApplicationJSONObject = postCheck400ApplicationJSONObject;
        return this;
    }
}