package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDeployedDevicesDeploymentRequest {
    public String serverURL;
    public CreateDeployedDevicesDeploymentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateDeployedDevicesDeploymentPathParams pathParams;
    public CreateDeployedDevicesDeploymentRequest withPathParams(CreateDeployedDevicesDeploymentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateDeployedDevicesDeploymentCreateDeployedDevicesDeploymentRequest request;
    public CreateDeployedDevicesDeploymentRequest withRequest(CreateDeployedDevicesDeploymentCreateDeployedDevicesDeploymentRequest request) {
        this.request = request;
        return this;
    }
    public CreateDeployedDevicesDeploymentSecurity security;
    public CreateDeployedDevicesDeploymentRequest withSecurity(CreateDeployedDevicesDeploymentSecurity security) {
        this.security = security;
        return this;
    }
}