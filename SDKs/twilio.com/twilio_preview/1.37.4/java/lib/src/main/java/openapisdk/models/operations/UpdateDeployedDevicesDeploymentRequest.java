package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeployedDevicesDeploymentRequest {
    public String serverURL;
    public UpdateDeployedDevicesDeploymentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateDeployedDevicesDeploymentPathParams pathParams;
    public UpdateDeployedDevicesDeploymentRequest withPathParams(UpdateDeployedDevicesDeploymentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateDeployedDevicesDeploymentUpdateDeployedDevicesDeploymentRequest request;
    public UpdateDeployedDevicesDeploymentRequest withRequest(UpdateDeployedDevicesDeploymentUpdateDeployedDevicesDeploymentRequest request) {
        this.request = request;
        return this;
    }
    public UpdateDeployedDevicesDeploymentSecurity security;
    public UpdateDeployedDevicesDeploymentRequest withSecurity(UpdateDeployedDevicesDeploymentSecurity security) {
        this.security = security;
        return this;
    }
}