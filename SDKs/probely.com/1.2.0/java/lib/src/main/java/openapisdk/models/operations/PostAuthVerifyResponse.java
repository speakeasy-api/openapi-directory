package openapisdk.models.operations;



public class PostAuthVerifyResponse {
    public String contentType;
    public PostAuthVerifyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAuthVerifyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostAuthVerify200ApplicationJson postAuthVerify200ApplicationJSONObject;
    public PostAuthVerifyResponse withPostAuthVerify200ApplicationJsonObject(PostAuthVerify200ApplicationJson postAuthVerify200ApplicationJSONObject) {
        this.postAuthVerify200ApplicationJSONObject = postAuthVerify200ApplicationJSONObject;
        return this;
    }
    public PostAuthVerify400ApplicationJson postAuthVerify400ApplicationJSONObject;
    public PostAuthVerifyResponse withPostAuthVerify400ApplicationJsonObject(PostAuthVerify400ApplicationJson postAuthVerify400ApplicationJSONObject) {
        this.postAuthVerify400ApplicationJSONObject = postAuthVerify400ApplicationJSONObject;
        return this;
    }
    public PostAuthVerify500ApplicationJson postAuthVerify500ApplicationJSONObject;
    public PostAuthVerifyResponse withPostAuthVerify500ApplicationJsonObject(PostAuthVerify500ApplicationJson postAuthVerify500ApplicationJSONObject) {
        this.postAuthVerify500ApplicationJSONObject = postAuthVerify500ApplicationJSONObject;
        return this;
    }
}