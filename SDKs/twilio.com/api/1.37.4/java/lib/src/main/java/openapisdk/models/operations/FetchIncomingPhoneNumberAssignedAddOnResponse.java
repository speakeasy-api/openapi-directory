package openapisdk.models.operations;



public class FetchIncomingPhoneNumberAssignedAddOnResponse {
    public String contentType;
    public FetchIncomingPhoneNumberAssignedAddOnResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchIncomingPhoneNumberAssignedAddOnResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn;
    public FetchIncomingPhoneNumberAssignedAddOnResponse withApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn(openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn) {
        this.apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn = apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn;
        return this;
    }
}