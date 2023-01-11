package openapisdk.models.operations;



public class GetSshKeysResponse {
    public String contentType;
    public GetSshKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSshKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetSshKeys200ApplicationJson getSshKeys200ApplicationJSONObject;
    public GetSshKeysResponse withGetSshKeys200ApplicationJsonObject(GetSshKeys200ApplicationJson getSshKeys200ApplicationJSONObject) {
        this.getSshKeys200ApplicationJSONObject = getSshKeys200ApplicationJSONObject;
        return this;
    }
}