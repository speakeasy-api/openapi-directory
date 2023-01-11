package openapisdk.models.operations;



public class SendEmailConfirmationResponse {
    public String contentType;
    public SendEmailConfirmationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SendEmailConfirmationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public SendEmailConfirmation200ApplicationJson sendEmailConfirmation200ApplicationJSONObject;
    public SendEmailConfirmationResponse withSendEmailConfirmation200ApplicationJsonObject(SendEmailConfirmation200ApplicationJson sendEmailConfirmation200ApplicationJSONObject) {
        this.sendEmailConfirmation200ApplicationJSONObject = sendEmailConfirmation200ApplicationJSONObject;
        return this;
    }
}