package openapisdk.models.operations;



public class SendUserEmailConfirmationResponse {
    public String contentType;
    public SendUserEmailConfirmationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public SendUserEmailConfirmationResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public SendUserEmailConfirmationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public SendUserEmailConfirmation200ApplicationJson sendUserEmailConfirmation200ApplicationJSONObject;
    public SendUserEmailConfirmationResponse withSendUserEmailConfirmation200ApplicationJsonObject(SendUserEmailConfirmation200ApplicationJson sendUserEmailConfirmation200ApplicationJSONObject) {
        this.sendUserEmailConfirmation200ApplicationJSONObject = sendUserEmailConfirmation200ApplicationJSONObject;
        return this;
    }
    public SendUserEmailConfirmation202ApplicationJson sendUserEmailConfirmation202ApplicationJSONObject;
    public SendUserEmailConfirmationResponse withSendUserEmailConfirmation202ApplicationJsonObject(SendUserEmailConfirmation202ApplicationJson sendUserEmailConfirmation202ApplicationJSONObject) {
        this.sendUserEmailConfirmation202ApplicationJSONObject = sendUserEmailConfirmation202ApplicationJSONObject;
        return this;
    }
}