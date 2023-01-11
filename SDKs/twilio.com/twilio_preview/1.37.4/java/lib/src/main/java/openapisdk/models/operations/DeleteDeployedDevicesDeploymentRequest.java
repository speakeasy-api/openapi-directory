package openapisdk.models.operations;



public class DeleteDeployedDevicesDeploymentRequest {
    public String serverURL;
    public DeleteDeployedDevicesDeploymentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteDeployedDevicesDeploymentPathParams pathParams;
    public DeleteDeployedDevicesDeploymentRequest withPathParams(DeleteDeployedDevicesDeploymentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteDeployedDevicesDeploymentSecurity security;
    public DeleteDeployedDevicesDeploymentRequest withSecurity(DeleteDeployedDevicesDeploymentSecurity security) {
        this.security = security;
        return this;
    }
}