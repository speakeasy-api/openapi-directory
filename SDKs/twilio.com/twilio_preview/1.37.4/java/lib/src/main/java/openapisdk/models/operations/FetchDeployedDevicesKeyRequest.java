package openapisdk.models.operations;



public class FetchDeployedDevicesKeyRequest {
    public String serverURL;
    public FetchDeployedDevicesKeyRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchDeployedDevicesKeyPathParams pathParams;
    public FetchDeployedDevicesKeyRequest withPathParams(FetchDeployedDevicesKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchDeployedDevicesKeySecurity security;
    public FetchDeployedDevicesKeyRequest withSecurity(FetchDeployedDevicesKeySecurity security) {
        this.security = security;
        return this;
    }
}