package openapisdk.models.operations;



public class DeleteDeployedDevicesFleetRequest {
    public String serverURL;
    public DeleteDeployedDevicesFleetRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteDeployedDevicesFleetPathParams pathParams;
    public DeleteDeployedDevicesFleetRequest withPathParams(DeleteDeployedDevicesFleetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteDeployedDevicesFleetSecurity security;
    public DeleteDeployedDevicesFleetRequest withSecurity(DeleteDeployedDevicesFleetSecurity security) {
        this.security = security;
        return this;
    }
}