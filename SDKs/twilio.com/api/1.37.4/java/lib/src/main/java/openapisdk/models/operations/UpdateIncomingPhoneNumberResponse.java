package openapisdk.models.operations;



public class UpdateIncomingPhoneNumberResponse {
    public String contentType;
    public UpdateIncomingPhoneNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateIncomingPhoneNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumber apiV2010AccountIncomingPhoneNumber;
    public UpdateIncomingPhoneNumberResponse withApiV2010AccountIncomingPhoneNumber(openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumber apiV2010AccountIncomingPhoneNumber) {
        this.apiV2010AccountIncomingPhoneNumber = apiV2010AccountIncomingPhoneNumber;
        return this;
    }
}