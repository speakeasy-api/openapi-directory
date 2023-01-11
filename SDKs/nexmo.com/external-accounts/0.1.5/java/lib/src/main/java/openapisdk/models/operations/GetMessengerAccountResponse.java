package openapisdk.models.operations;



public class GetMessengerAccountResponse {
    public openapisdk.models.shared.FourHundredAndOneResponse fourHundredAndOneResponse;
    public GetMessengerAccountResponse withFourHundredAndOneResponse(openapisdk.models.shared.FourHundredAndOneResponse fourHundredAndOneResponse) {
        this.fourHundredAndOneResponse = fourHundredAndOneResponse;
        return this;
    }
    public String contentType;
    public GetMessengerAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MessengerAccountResponse messengerAccountResponse;
    public GetMessengerAccountResponse withMessengerAccountResponse(openapisdk.models.shared.MessengerAccountResponse messengerAccountResponse) {
        this.messengerAccountResponse = messengerAccountResponse;
        return this;
    }
    public Long statusCode;
    public GetMessengerAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}