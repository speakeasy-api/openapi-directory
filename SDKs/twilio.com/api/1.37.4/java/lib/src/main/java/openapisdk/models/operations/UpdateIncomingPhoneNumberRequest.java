package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateIncomingPhoneNumberRequest {
    public String serverURL;
    public UpdateIncomingPhoneNumberRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateIncomingPhoneNumberPathParams pathParams;
    public UpdateIncomingPhoneNumberRequest withPathParams(UpdateIncomingPhoneNumberPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest request;
    public UpdateIncomingPhoneNumberRequest withRequest(UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest request) {
        this.request = request;
        return this;
    }
    public UpdateIncomingPhoneNumberSecurity security;
    public UpdateIncomingPhoneNumberRequest withSecurity(UpdateIncomingPhoneNumberSecurity security) {
        this.security = security;
        return this;
    }
}