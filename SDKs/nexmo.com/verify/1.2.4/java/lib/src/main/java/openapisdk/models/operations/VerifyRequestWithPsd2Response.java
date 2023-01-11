package openapisdk.models.operations;



public class VerifyRequestWithPsd2Response {
    public String contentType;
    public VerifyRequestWithPsd2Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VerifyRequestWithPsd2Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object verifyRequestWithPsd2200ApplicationJSONOneOf;
    public VerifyRequestWithPsd2Response withVerifyRequestWithPsd2200ApplicationJsonOneOf(Object verifyRequestWithPsd2200ApplicationJSONOneOf) {
        this.verifyRequestWithPsd2200ApplicationJSONOneOf = verifyRequestWithPsd2200ApplicationJSONOneOf;
        return this;
    }
}