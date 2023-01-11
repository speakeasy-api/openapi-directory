package openapisdk.models.operations;



public class FetchDeployedDevicesDeploymentRequest {
    public String serverURL;
    public FetchDeployedDevicesDeploymentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchDeployedDevicesDeploymentPathParams pathParams;
    public FetchDeployedDevicesDeploymentRequest withPathParams(FetchDeployedDevicesDeploymentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchDeployedDevicesDeploymentSecurity security;
    public FetchDeployedDevicesDeploymentRequest withSecurity(FetchDeployedDevicesDeploymentSecurity security) {
        this.security = security;
        return this;
    }
}