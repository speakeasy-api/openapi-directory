package openapisdk.models.operations;



public class ListDeployedDevicesCertificateRequest {
    public String serverURL;
    public ListDeployedDevicesCertificateRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListDeployedDevicesCertificatePathParams pathParams;
    public ListDeployedDevicesCertificateRequest withPathParams(ListDeployedDevicesCertificatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListDeployedDevicesCertificateQueryParams queryParams;
    public ListDeployedDevicesCertificateRequest withQueryParams(ListDeployedDevicesCertificateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDeployedDevicesCertificateSecurity security;
    public ListDeployedDevicesCertificateRequest withSecurity(ListDeployedDevicesCertificateSecurity security) {
        this.security = security;
        return this;
    }
}