package openapisdk.models.operations;



public class DeleteMessengerAccountResponse {
    public openapisdk.models.shared.FourHundredAndOneResponse fourHundredAndOneResponse;
    public DeleteMessengerAccountResponse withFourHundredAndOneResponse(openapisdk.models.shared.FourHundredAndOneResponse fourHundredAndOneResponse) {
        this.fourHundredAndOneResponse = fourHundredAndOneResponse;
        return this;
    }
    public openapisdk.models.shared.FourHundredAndThreeResponse fourHundredAndThreeResponse;
    public DeleteMessengerAccountResponse withFourHundredAndThreeResponse(openapisdk.models.shared.FourHundredAndThreeResponse fourHundredAndThreeResponse) {
        this.fourHundredAndThreeResponse = fourHundredAndThreeResponse;
        return this;
    }
    public String contentType;
    public DeleteMessengerAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteMessengerAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}