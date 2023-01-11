package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTollfreeVerificationRequest {
    public String serverURL;
    public CreateTollfreeVerificationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateTollfreeVerificationCreateTollfreeVerificationRequest request;
    public CreateTollfreeVerificationRequest withRequest(CreateTollfreeVerificationCreateTollfreeVerificationRequest request) {
        this.request = request;
        return this;
    }
    public CreateTollfreeVerificationSecurity security;
    public CreateTollfreeVerificationRequest withSecurity(CreateTollfreeVerificationSecurity security) {
        this.security = security;
        return this;
    }
}