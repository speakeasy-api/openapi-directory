package openapisdk.models.operations;



public class FetchDeployedDevicesFleetRequest {
    public String serverURL;
    public FetchDeployedDevicesFleetRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchDeployedDevicesFleetPathParams pathParams;
    public FetchDeployedDevicesFleetRequest withPathParams(FetchDeployedDevicesFleetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchDeployedDevicesFleetSecurity security;
    public FetchDeployedDevicesFleetRequest withSecurity(FetchDeployedDevicesFleetSecurity security) {
        this.security = security;
        return this;
    }
}