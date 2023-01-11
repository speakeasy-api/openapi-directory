package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVerificationRequest {
    public String serverURL;
    public CreateVerificationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateVerificationPathParams pathParams;
    public CreateVerificationRequest withPathParams(CreateVerificationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateVerificationCreateVerificationRequest request;
    public CreateVerificationRequest withRequest(CreateVerificationCreateVerificationRequest request) {
        this.request = request;
        return this;
    }
    public CreateVerificationSecurity security;
    public CreateVerificationRequest withSecurity(CreateVerificationSecurity security) {
        this.security = security;
        return this;
    }
}