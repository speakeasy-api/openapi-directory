package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateIncomingPhoneNumberLocalRequest {
    public String serverURL;
    public CreateIncomingPhoneNumberLocalRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateIncomingPhoneNumberLocalPathParams pathParams;
    public CreateIncomingPhoneNumberLocalRequest withPathParams(CreateIncomingPhoneNumberLocalPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest request;
    public CreateIncomingPhoneNumberLocalRequest withRequest(CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest request) {
        this.request = request;
        return this;
    }
    public CreateIncomingPhoneNumberLocalSecurity security;
    public CreateIncomingPhoneNumberLocalRequest withSecurity(CreateIncomingPhoneNumberLocalSecurity security) {
        this.security = security;
        return this;
    }
}