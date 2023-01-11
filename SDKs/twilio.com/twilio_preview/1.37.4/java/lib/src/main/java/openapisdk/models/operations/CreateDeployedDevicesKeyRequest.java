package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDeployedDevicesKeyRequest {
    public String serverURL;
    public CreateDeployedDevicesKeyRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateDeployedDevicesKeyPathParams pathParams;
    public CreateDeployedDevicesKeyRequest withPathParams(CreateDeployedDevicesKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateDeployedDevicesKeyCreateDeployedDevicesKeyRequest request;
    public CreateDeployedDevicesKeyRequest withRequest(CreateDeployedDevicesKeyCreateDeployedDevicesKeyRequest request) {
        this.request = request;
        return this;
    }
    public CreateDeployedDevicesKeySecurity security;
    public CreateDeployedDevicesKeyRequest withSecurity(CreateDeployedDevicesKeySecurity security) {
        this.security = security;
        return this;
    }
}