package openapisdk.models.operations;



public class CreateIncomingPhoneNumberAssignedAddOnResponse {
    public String contentType;
    public CreateIncomingPhoneNumberAssignedAddOnResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateIncomingPhoneNumberAssignedAddOnResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn;
    public CreateIncomingPhoneNumberAssignedAddOnResponse withApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn(openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn) {
        this.apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn = apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn;
        return this;
    }
}