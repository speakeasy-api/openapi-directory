package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeployedDevicesCertificateRequest {
    public String serverURL;
    public UpdateDeployedDevicesCertificateRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateDeployedDevicesCertificatePathParams pathParams;
    public UpdateDeployedDevicesCertificateRequest withPathParams(UpdateDeployedDevicesCertificatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateDeployedDevicesCertificateUpdateDeployedDevicesCertificateRequest request;
    public UpdateDeployedDevicesCertificateRequest withRequest(UpdateDeployedDevicesCertificateUpdateDeployedDevicesCertificateRequest request) {
        this.request = request;
        return this;
    }
    public UpdateDeployedDevicesCertificateSecurity security;
    public UpdateDeployedDevicesCertificateRequest withSecurity(UpdateDeployedDevicesCertificateSecurity security) {
        this.security = security;
        return this;
    }
}