package openapisdk.models.operations;



public class DeleteDeployedDevicesKeyRequest {
    public String serverURL;
    public DeleteDeployedDevicesKeyRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteDeployedDevicesKeyPathParams pathParams;
    public DeleteDeployedDevicesKeyRequest withPathParams(DeleteDeployedDevicesKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteDeployedDevicesKeySecurity security;
    public DeleteDeployedDevicesKeyRequest withSecurity(DeleteDeployedDevicesKeySecurity security) {
        this.security = security;
        return this;
    }
}