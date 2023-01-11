package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeployedDevicesKeyRequest {
    public String serverURL;
    public UpdateDeployedDevicesKeyRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateDeployedDevicesKeyPathParams pathParams;
    public UpdateDeployedDevicesKeyRequest withPathParams(UpdateDeployedDevicesKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest request;
    public UpdateDeployedDevicesKeyRequest withRequest(UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest request) {
        this.request = request;
        return this;
    }
    public UpdateDeployedDevicesKeySecurity security;
    public UpdateDeployedDevicesKeyRequest withSecurity(UpdateDeployedDevicesKeySecurity security) {
        this.security = security;
        return this;
    }
}