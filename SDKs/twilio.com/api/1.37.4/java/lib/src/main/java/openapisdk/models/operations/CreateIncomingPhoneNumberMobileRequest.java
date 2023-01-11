package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateIncomingPhoneNumberMobileRequest {
    public String serverURL;
    public CreateIncomingPhoneNumberMobileRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateIncomingPhoneNumberMobilePathParams pathParams;
    public CreateIncomingPhoneNumberMobileRequest withPathParams(CreateIncomingPhoneNumberMobilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest request;
    public CreateIncomingPhoneNumberMobileRequest withRequest(CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest request) {
        this.request = request;
        return this;
    }
    public CreateIncomingPhoneNumberMobileSecurity security;
    public CreateIncomingPhoneNumberMobileRequest withSecurity(CreateIncomingPhoneNumberMobileSecurity security) {
        this.security = security;
        return this;
    }
}