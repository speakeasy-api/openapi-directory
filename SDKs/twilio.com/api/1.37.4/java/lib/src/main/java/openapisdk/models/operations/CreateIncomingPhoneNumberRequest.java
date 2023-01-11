package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateIncomingPhoneNumberRequest {
    public String serverURL;
    public CreateIncomingPhoneNumberRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateIncomingPhoneNumberPathParams pathParams;
    public CreateIncomingPhoneNumberRequest withPathParams(CreateIncomingPhoneNumberPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest request;
    public CreateIncomingPhoneNumberRequest withRequest(CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest request) {
        this.request = request;
        return this;
    }
    public CreateIncomingPhoneNumberSecurity security;
    public CreateIncomingPhoneNumberRequest withSecurity(CreateIncomingPhoneNumberSecurity security) {
        this.security = security;
        return this;
    }
}