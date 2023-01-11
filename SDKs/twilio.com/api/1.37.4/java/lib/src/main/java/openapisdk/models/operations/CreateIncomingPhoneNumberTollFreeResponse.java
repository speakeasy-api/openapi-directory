package openapisdk.models.operations;



public class CreateIncomingPhoneNumberTollFreeResponse {
    public String contentType;
    public CreateIncomingPhoneNumberTollFreeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateIncomingPhoneNumberTollFreeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree;
    public CreateIncomingPhoneNumberTollFreeResponse withApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree(openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree) {
        this.apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree = apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree;
        return this;
    }
}