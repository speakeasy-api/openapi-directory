package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDeploymentRequest {
    public String serverURL;
    public CreateDeploymentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateDeploymentPathParams pathParams;
    public CreateDeploymentRequest withPathParams(CreateDeploymentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateDeploymentCreateDeploymentRequest request;
    public CreateDeploymentRequest withRequest(CreateDeploymentCreateDeploymentRequest request) {
        this.request = request;
        return this;
    }
    public CreateDeploymentSecurity security;
    public CreateDeploymentRequest withSecurity(CreateDeploymentSecurity security) {
        this.security = security;
        return this;
    }
}