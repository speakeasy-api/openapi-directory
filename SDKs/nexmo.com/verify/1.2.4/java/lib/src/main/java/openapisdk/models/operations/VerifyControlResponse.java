package openapisdk.models.operations;



public class VerifyControlResponse {
    public byte[] body;
    public VerifyControlResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public VerifyControlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VerifyControlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object verifyControl200ApplicationJSONOneOf;
    public VerifyControlResponse withVerifyControl200ApplicationJsonOneOf(Object verifyControl200ApplicationJSONOneOf) {
        this.verifyControl200ApplicationJSONOneOf = verifyControl200ApplicationJSONOneOf;
        return this;
    }
}