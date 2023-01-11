package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateIncomingPhoneNumberAssignedAddOnRequest {
    public String serverURL;
    public CreateIncomingPhoneNumberAssignedAddOnRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateIncomingPhoneNumberAssignedAddOnPathParams pathParams;
    public CreateIncomingPhoneNumberAssignedAddOnRequest withPathParams(CreateIncomingPhoneNumberAssignedAddOnPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateIncomingPhoneNumberAssignedAddOnCreateIncomingPhoneNumberAssignedAddOnRequest request;
    public CreateIncomingPhoneNumberAssignedAddOnRequest withRequest(CreateIncomingPhoneNumberAssignedAddOnCreateIncomingPhoneNumberAssignedAddOnRequest request) {
        this.request = request;
        return this;
    }
    public CreateIncomingPhoneNumberAssignedAddOnSecurity security;
    public CreateIncomingPhoneNumberAssignedAddOnRequest withSecurity(CreateIncomingPhoneNumberAssignedAddOnSecurity security) {
        this.security = security;
        return this;
    }
}