package openapisdk.models.operations;



public class VerifyRequestResponse {
    public byte[] body;
    public VerifyRequestResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public VerifyRequestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VerifyRequestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object verifyRequest200ApplicationJSONOneOf;
    public VerifyRequestResponse withVerifyRequest200ApplicationJsonOneOf(Object verifyRequest200ApplicationJSONOneOf) {
        this.verifyRequest200ApplicationJSONOneOf = verifyRequest200ApplicationJSONOneOf;
        return this;
    }
}