package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDeployedDevicesDeviceRequest {
    public String serverURL;
    public CreateDeployedDevicesDeviceRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateDeployedDevicesDevicePathParams pathParams;
    public CreateDeployedDevicesDeviceRequest withPathParams(CreateDeployedDevicesDevicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateDeployedDevicesDeviceCreateDeployedDevicesDeviceRequest request;
    public CreateDeployedDevicesDeviceRequest withRequest(CreateDeployedDevicesDeviceCreateDeployedDevicesDeviceRequest request) {
        this.request = request;
        return this;
    }
    public CreateDeployedDevicesDeviceSecurity security;
    public CreateDeployedDevicesDeviceRequest withSecurity(CreateDeployedDevicesDeviceSecurity security) {
        this.security = security;
        return this;
    }
}