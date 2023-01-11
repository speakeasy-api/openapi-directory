package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVerificationCheckRequest {
    public String serverURL;
    public CreateVerificationCheckRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateVerificationCheckPathParams pathParams;
    public CreateVerificationCheckRequest withPathParams(CreateVerificationCheckPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateVerificationCheckCreateVerificationCheckRequest request;
    public CreateVerificationCheckRequest withRequest(CreateVerificationCheckCreateVerificationCheckRequest request) {
        this.request = request;
        return this;
    }
    public CreateVerificationCheckSecurity security;
    public CreateVerificationCheckRequest withSecurity(CreateVerificationCheckSecurity security) {
        this.security = security;
        return this;
    }
}