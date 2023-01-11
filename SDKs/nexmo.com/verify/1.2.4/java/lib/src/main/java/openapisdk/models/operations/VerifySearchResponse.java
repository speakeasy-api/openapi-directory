package openapisdk.models.operations;



public class VerifySearchResponse {
    public byte[] body;
    public VerifySearchResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public VerifySearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VerifySearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object verifySearch200ApplicationJSONOneOf;
    public VerifySearchResponse withVerifySearch200ApplicationJsonOneOf(Object verifySearch200ApplicationJSONOneOf) {
        this.verifySearch200ApplicationJSONOneOf = verifySearch200ApplicationJSONOneOf;
        return this;
    }
}