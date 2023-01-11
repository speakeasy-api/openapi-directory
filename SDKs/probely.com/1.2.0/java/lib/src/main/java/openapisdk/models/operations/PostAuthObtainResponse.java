package openapisdk.models.operations;



public class PostAuthObtainResponse {
    public String contentType;
    public PostAuthObtainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAuthObtainResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostAuthObtain200ApplicationJson postAuthObtain200ApplicationJSONObject;
    public PostAuthObtainResponse withPostAuthObtain200ApplicationJsonObject(PostAuthObtain200ApplicationJson postAuthObtain200ApplicationJSONObject) {
        this.postAuthObtain200ApplicationJSONObject = postAuthObtain200ApplicationJSONObject;
        return this;
    }
    public PostAuthObtain400ApplicationJson postAuthObtain400ApplicationJSONObject;
    public PostAuthObtainResponse withPostAuthObtain400ApplicationJsonObject(PostAuthObtain400ApplicationJson postAuthObtain400ApplicationJSONObject) {
        this.postAuthObtain400ApplicationJSONObject = postAuthObtain400ApplicationJSONObject;
        return this;
    }
    public PostAuthObtain500ApplicationJson postAuthObtain500ApplicationJSONObject;
    public PostAuthObtainResponse withPostAuthObtain500ApplicationJsonObject(PostAuthObtain500ApplicationJson postAuthObtain500ApplicationJSONObject) {
        this.postAuthObtain500ApplicationJSONObject = postAuthObtain500ApplicationJSONObject;
        return this;
    }
}