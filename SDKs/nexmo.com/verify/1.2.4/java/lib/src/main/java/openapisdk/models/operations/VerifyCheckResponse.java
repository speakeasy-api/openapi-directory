package openapisdk.models.operations;



public class VerifyCheckResponse {
    public byte[] body;
    public VerifyCheckResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public VerifyCheckResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VerifyCheckResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object verifyCheck200ApplicationJSONOneOf;
    public VerifyCheckResponse withVerifyCheck200ApplicationJsonOneOf(Object verifyCheck200ApplicationJSONOneOf) {
        this.verifyCheck200ApplicationJSONOneOf = verifyCheck200ApplicationJSONOneOf;
        return this;
    }
}