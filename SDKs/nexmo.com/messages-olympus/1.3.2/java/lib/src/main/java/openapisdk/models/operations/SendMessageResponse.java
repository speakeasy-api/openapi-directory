package openapisdk.models.operations;



public class SendMessageResponse {
    public String contentType;
    public SendMessageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorInternal errorInternal;
    public SendMessageResponse withErrorInternal(openapisdk.models.shared.ErrorInternal errorInternal) {
        this.errorInternal = errorInternal;
        return this;
    }
    public openapisdk.models.shared.ErrorPaymentRequired errorPaymentRequired;
    public SendMessageResponse withErrorPaymentRequired(openapisdk.models.shared.ErrorPaymentRequired errorPaymentRequired) {
        this.errorPaymentRequired = errorPaymentRequired;
        return this;
    }
    public openapisdk.models.shared.ErrorThrottled errorThrottled;
    public SendMessageResponse withErrorThrottled(openapisdk.models.shared.ErrorThrottled errorThrottled) {
        this.errorThrottled = errorThrottled;
        return this;
    }
    public java.util.Map<String, Object> sendMessage202ApplicationJSONObject;
    public SendMessageResponse withSendMessage202ApplicationJsonObject(java.util.Map<String, Object> sendMessage202ApplicationJSONObject) {
        this.sendMessage202ApplicationJSONObject = sendMessage202ApplicationJSONObject;
        return this;
    }
    public Object sendMessage401ApplicationJSONOneOf;
    public SendMessageResponse withSendMessage401ApplicationJsonOneOf(Object sendMessage401ApplicationJSONOneOf) {
        this.sendMessage401ApplicationJSONOneOf = sendMessage401ApplicationJSONOneOf;
        return this;
    }
    public Object sendMessage422ApplicationJSONOneOf;
    public SendMessageResponse withSendMessage422ApplicationJsonOneOf(Object sendMessage422ApplicationJSONOneOf) {
        this.sendMessage422ApplicationJSONOneOf = sendMessage422ApplicationJSONOneOf;
        return this;
    }
    public Long statusCode;
    public SendMessageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}