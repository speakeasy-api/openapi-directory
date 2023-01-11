package openapisdk.models.operations;



public class PostSshKeysResponse {
    public String contentType;
    public PostSshKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostSshKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostSshKeys201ApplicationJson postSshKeys201ApplicationJSONObject;
    public PostSshKeysResponse withPostSshKeys201ApplicationJsonObject(PostSshKeys201ApplicationJson postSshKeys201ApplicationJSONObject) {
        this.postSshKeys201ApplicationJSONObject = postSshKeys201ApplicationJSONObject;
        return this;
    }
}