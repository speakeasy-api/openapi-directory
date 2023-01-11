package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeployedDevicesDeviceRequest {
    public String serverURL;
    public UpdateDeployedDevicesDeviceRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateDeployedDevicesDevicePathParams pathParams;
    public UpdateDeployedDevicesDeviceRequest withPathParams(UpdateDeployedDevicesDevicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateDeployedDevicesDeviceUpdateDeployedDevicesDeviceRequest request;
    public UpdateDeployedDevicesDeviceRequest withRequest(UpdateDeployedDevicesDeviceUpdateDeployedDevicesDeviceRequest request) {
        this.request = request;
        return this;
    }
    public UpdateDeployedDevicesDeviceSecurity security;
    public UpdateDeployedDevicesDeviceRequest withSecurity(UpdateDeployedDevicesDeviceSecurity security) {
        this.security = security;
        return this;
    }
}