package openapisdk.models.operations;



public class CreateIncomingPhoneNumberLocalResponse {
    public String contentType;
    public CreateIncomingPhoneNumberLocalResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateIncomingPhoneNumberLocalResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal;
    public CreateIncomingPhoneNumberLocalResponse withApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal(openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal) {
        this.apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal = apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal;
        return this;
    }
}