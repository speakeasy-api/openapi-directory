package openapisdk.models.operations;



public class CreateIncomingPhoneNumberMobileResponse {
    public String contentType;
    public CreateIncomingPhoneNumberMobileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateIncomingPhoneNumberMobileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile;
    public CreateIncomingPhoneNumberMobileResponse withApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile(openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile) {
        this.apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile = apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile;
        return this;
    }
}