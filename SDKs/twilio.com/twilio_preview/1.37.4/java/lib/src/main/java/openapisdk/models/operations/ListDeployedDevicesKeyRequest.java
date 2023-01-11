package openapisdk.models.operations;



public class ListDeployedDevicesKeyRequest {
    public String serverURL;
    public ListDeployedDevicesKeyRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListDeployedDevicesKeyPathParams pathParams;
    public ListDeployedDevicesKeyRequest withPathParams(ListDeployedDevicesKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListDeployedDevicesKeyQueryParams queryParams;
    public ListDeployedDevicesKeyRequest withQueryParams(ListDeployedDevicesKeyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDeployedDevicesKeySecurity security;
    public ListDeployedDevicesKeyRequest withSecurity(ListDeployedDevicesKeySecurity security) {
        this.security = security;
        return this;
    }
}