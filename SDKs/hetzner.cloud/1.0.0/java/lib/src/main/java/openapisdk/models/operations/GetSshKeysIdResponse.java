package openapisdk.models.operations;



public class GetSshKeysIdResponse {
    public String contentType;
    public GetSshKeysIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSshKeysIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetSshKeysId200ApplicationJson getSshKeysId200ApplicationJSONObject;
    public GetSshKeysIdResponse withGetSshKeysId200ApplicationJsonObject(GetSshKeysId200ApplicationJson getSshKeysId200ApplicationJSONObject) {
        this.getSshKeysId200ApplicationJSONObject = getSshKeysId200ApplicationJSONObject;
        return this;
    }
}