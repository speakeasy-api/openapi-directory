package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEnvironmentRequest {
    public String serverURL;
    public CreateEnvironmentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateEnvironmentPathParams pathParams;
    public CreateEnvironmentRequest withPathParams(CreateEnvironmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateEnvironmentCreateEnvironmentRequest request;
    public CreateEnvironmentRequest withRequest(CreateEnvironmentCreateEnvironmentRequest request) {
        this.request = request;
        return this;
    }
    public CreateEnvironmentSecurity security;
    public CreateEnvironmentRequest withSecurity(CreateEnvironmentSecurity security) {
        this.security = security;
        return this;
    }
}