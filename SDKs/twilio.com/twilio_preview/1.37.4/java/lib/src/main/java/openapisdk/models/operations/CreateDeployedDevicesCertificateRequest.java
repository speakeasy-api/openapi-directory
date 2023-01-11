package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDeployedDevicesCertificateRequest {
    public String serverURL;
    public CreateDeployedDevicesCertificateRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateDeployedDevicesCertificatePathParams pathParams;
    public CreateDeployedDevicesCertificateRequest withPathParams(CreateDeployedDevicesCertificatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest request;
    public CreateDeployedDevicesCertificateRequest withRequest(CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest request) {
        this.request = request;
        return this;
    }
    public CreateDeployedDevicesCertificateSecurity security;
    public CreateDeployedDevicesCertificateRequest withSecurity(CreateDeployedDevicesCertificateSecurity security) {
        this.security = security;
        return this;
    }
}