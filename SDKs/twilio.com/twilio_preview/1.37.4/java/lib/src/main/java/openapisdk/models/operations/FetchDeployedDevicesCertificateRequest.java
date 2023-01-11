package openapisdk.models.operations;



public class FetchDeployedDevicesCertificateRequest {
    public String serverURL;
    public FetchDeployedDevicesCertificateRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchDeployedDevicesCertificatePathParams pathParams;
    public FetchDeployedDevicesCertificateRequest withPathParams(FetchDeployedDevicesCertificatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchDeployedDevicesCertificateSecurity security;
    public FetchDeployedDevicesCertificateRequest withSecurity(FetchDeployedDevicesCertificateSecurity security) {
        this.security = security;
        return this;
    }
}