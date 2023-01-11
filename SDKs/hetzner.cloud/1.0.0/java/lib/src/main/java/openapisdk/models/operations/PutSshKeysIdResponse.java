package openapisdk.models.operations;



public class PutSshKeysIdResponse {
    public String contentType;
    public PutSshKeysIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutSshKeysIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PutSshKeysId200ApplicationJson putSshKeysId200ApplicationJSONObject;
    public PutSshKeysIdResponse withPutSshKeysId200ApplicationJsonObject(PutSshKeysId200ApplicationJson putSshKeysId200ApplicationJSONObject) {
        this.putSshKeysId200ApplicationJSONObject = putSshKeysId200ApplicationJSONObject;
        return this;
    }
}