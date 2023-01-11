package openapisdk.models.operations;



public class SendAnSmsResponse {
    public byte[] body;
    public SendAnSmsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public SendAnSmsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SendAnSmsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object sendAnSms200ApplicationJSONOneOf;
    public SendAnSmsResponse withSendAnSms200ApplicationJsonOneOf(Object sendAnSms200ApplicationJSONOneOf) {
        this.sendAnSms200ApplicationJSONOneOf = sendAnSms200ApplicationJSONOneOf;
        return this;
    }
}