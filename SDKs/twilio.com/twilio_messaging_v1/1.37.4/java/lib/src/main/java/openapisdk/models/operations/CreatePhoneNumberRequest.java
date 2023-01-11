package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePhoneNumberRequest {
    public String serverURL;
    public CreatePhoneNumberRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreatePhoneNumberPathParams pathParams;
    public CreatePhoneNumberRequest withPathParams(CreatePhoneNumberPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreatePhoneNumberCreatePhoneNumberRequest request;
    public CreatePhoneNumberRequest withRequest(CreatePhoneNumberCreatePhoneNumberRequest request) {
        this.request = request;
        return this;
    }
    public CreatePhoneNumberSecurity security;
    public CreatePhoneNumberRequest withSecurity(CreatePhoneNumberSecurity security) {
        this.security = security;
        return this;
    }
}