package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePhoneNumberRequest {
    public String serverURL;
    public UpdatePhoneNumberRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdatePhoneNumberPathParams pathParams;
    public UpdatePhoneNumberRequest withPathParams(UpdatePhoneNumberPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdatePhoneNumberUpdatePhoneNumberRequest request;
    public UpdatePhoneNumberRequest withRequest(UpdatePhoneNumberUpdatePhoneNumberRequest request) {
        this.request = request;
        return this;
    }
    public UpdatePhoneNumberSecurity security;
    public UpdatePhoneNumberRequest withSecurity(UpdatePhoneNumberSecurity security) {
        this.security = security;
        return this;
    }
}