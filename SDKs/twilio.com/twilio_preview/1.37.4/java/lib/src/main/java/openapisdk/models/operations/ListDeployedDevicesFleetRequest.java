package openapisdk.models.operations;



public class ListDeployedDevicesFleetRequest {
    public String serverURL;
    public ListDeployedDevicesFleetRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListDeployedDevicesFleetQueryParams queryParams;
    public ListDeployedDevicesFleetRequest withQueryParams(ListDeployedDevicesFleetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDeployedDevicesFleetSecurity security;
    public ListDeployedDevicesFleetRequest withSecurity(ListDeployedDevicesFleetSecurity security) {
        this.security = security;
        return this;
    }
}