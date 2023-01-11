package openapisdk.models.operations;



public class DeleteDeployedDevicesCertificateRequest {
    public String serverURL;
    public DeleteDeployedDevicesCertificateRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteDeployedDevicesCertificatePathParams pathParams;
    public DeleteDeployedDevicesCertificateRequest withPathParams(DeleteDeployedDevicesCertificatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteDeployedDevicesCertificateSecurity security;
    public DeleteDeployedDevicesCertificateRequest withSecurity(DeleteDeployedDevicesCertificateSecurity security) {
        this.security = security;
        return this;
    }
}