package openapisdk.models.operations;



public class CreateMessengerAccountResponse {
    public openapisdk.models.shared.FourHundredAndOneResponse fourHundredAndOneResponse;
    public CreateMessengerAccountResponse withFourHundredAndOneResponse(openapisdk.models.shared.FourHundredAndOneResponse fourHundredAndOneResponse) {
        this.fourHundredAndOneResponse = fourHundredAndOneResponse;
        return this;
    }
    public openapisdk.models.shared.FourHundredAndThreeResponse fourHundredAndThreeResponse;
    public CreateMessengerAccountResponse withFourHundredAndThreeResponse(openapisdk.models.shared.FourHundredAndThreeResponse fourHundredAndThreeResponse) {
        this.fourHundredAndThreeResponse = fourHundredAndThreeResponse;
        return this;
    }
    public String contentType;
    public CreateMessengerAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public CreateMessengerAccount400ApplicationJson createMessengerAccount400ApplicationJSONObject;
    public CreateMessengerAccountResponse withCreateMessengerAccount400ApplicationJsonObject(CreateMessengerAccount400ApplicationJson createMessengerAccount400ApplicationJSONObject) {
        this.createMessengerAccount400ApplicationJSONObject = createMessengerAccount400ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.MessengerAccountResponse messengerAccountResponse;
    public CreateMessengerAccountResponse withMessengerAccountResponse(openapisdk.models.shared.MessengerAccountResponse messengerAccountResponse) {
        this.messengerAccountResponse = messengerAccountResponse;
        return this;
    }
    public Long statusCode;
    public CreateMessengerAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}