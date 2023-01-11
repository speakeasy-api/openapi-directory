package openapisdk.models.operations;



public class SmsResponse {
    public String contentType;
    public SmsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Sms200ApplicationJson sms200ApplicationJSONObject;
    public SmsResponse withSms200ApplicationJsonObject(Sms200ApplicationJson sms200ApplicationJSONObject) {
        this.sms200ApplicationJSONObject = sms200ApplicationJSONObject;
        return this;
    }
    public String sms200TextPlainObject;
    public SmsResponse withSms200TextPlainObject(String sms200TextPlainObject) {
        this.sms200TextPlainObject = sms200TextPlainObject;
        return this;
    }
    public Long statusCode;
    public SmsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}