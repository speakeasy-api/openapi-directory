package openapisdk.models.operations;



public class UpdateMessengerAccountResponse {
    public openapisdk.models.shared.FourHundredAndOneResponse fourHundredAndOneResponse;
    public UpdateMessengerAccountResponse withFourHundredAndOneResponse(openapisdk.models.shared.FourHundredAndOneResponse fourHundredAndOneResponse) {
        this.fourHundredAndOneResponse = fourHundredAndOneResponse;
        return this;
    }
    public openapisdk.models.shared.FourHundredAndThreeResponse fourHundredAndThreeResponse;
    public UpdateMessengerAccountResponse withFourHundredAndThreeResponse(openapisdk.models.shared.FourHundredAndThreeResponse fourHundredAndThreeResponse) {
        this.fourHundredAndThreeResponse = fourHundredAndThreeResponse;
        return this;
    }
    public String contentType;
    public UpdateMessengerAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateMessengerAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateMessengerAccount200ApplicationJson updateMessengerAccount200ApplicationJSONObject;
    public UpdateMessengerAccountResponse withUpdateMessengerAccount200ApplicationJsonObject(UpdateMessengerAccount200ApplicationJson updateMessengerAccount200ApplicationJSONObject) {
        this.updateMessengerAccount200ApplicationJSONObject = updateMessengerAccount200ApplicationJSONObject;
        return this;
    }
    public UpdateMessengerAccount400ApplicationJson updateMessengerAccount400ApplicationJSONObject;
    public UpdateMessengerAccountResponse withUpdateMessengerAccount400ApplicationJsonObject(UpdateMessengerAccount400ApplicationJson updateMessengerAccount400ApplicationJSONObject) {
        this.updateMessengerAccount400ApplicationJSONObject = updateMessengerAccount400ApplicationJSONObject;
        return this;
    }
}