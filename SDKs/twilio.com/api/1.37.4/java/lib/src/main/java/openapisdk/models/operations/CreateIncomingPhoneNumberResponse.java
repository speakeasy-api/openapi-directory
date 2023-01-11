package openapisdk.models.operations;



public class CreateIncomingPhoneNumberResponse {
    public String contentType;
    public CreateIncomingPhoneNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateIncomingPhoneNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumber apiV2010AccountIncomingPhoneNumber;
    public CreateIncomingPhoneNumberResponse withApiV2010AccountIncomingPhoneNumber(openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumber apiV2010AccountIncomingPhoneNumber) {
        this.apiV2010AccountIncomingPhoneNumber = apiV2010AccountIncomingPhoneNumber;
        return this;
    }
}