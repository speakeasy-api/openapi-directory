package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateVerificationRequest {
    public String serverURL;
    public UpdateVerificationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateVerificationPathParams pathParams;
    public UpdateVerificationRequest withPathParams(UpdateVerificationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateVerificationUpdateVerificationRequest request;
    public UpdateVerificationRequest withRequest(UpdateVerificationUpdateVerificationRequest request) {
        this.request = request;
        return this;
    }
    public UpdateVerificationSecurity security;
    public UpdateVerificationRequest withSecurity(UpdateVerificationSecurity security) {
        this.security = security;
        return this;
    }
}