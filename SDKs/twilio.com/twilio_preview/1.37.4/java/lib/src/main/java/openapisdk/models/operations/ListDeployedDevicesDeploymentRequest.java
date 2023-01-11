package openapisdk.models.operations;



public class ListDeployedDevicesDeploymentRequest {
    public String serverURL;
    public ListDeployedDevicesDeploymentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListDeployedDevicesDeploymentPathParams pathParams;
    public ListDeployedDevicesDeploymentRequest withPathParams(ListDeployedDevicesDeploymentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListDeployedDevicesDeploymentQueryParams queryParams;
    public ListDeployedDevicesDeploymentRequest withQueryParams(ListDeployedDevicesDeploymentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDeployedDevicesDeploymentSecurity security;
    public ListDeployedDevicesDeploymentRequest withSecurity(ListDeployedDevicesDeploymentSecurity security) {
        this.security = security;
        return this;
    }
}