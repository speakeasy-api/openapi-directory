package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeviceRequest {
    public String serverURL;
    public UpdateDeviceRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateDevicePathParams pathParams;
    public UpdateDeviceRequest withPathParams(UpdateDevicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateDeviceUpdateDeviceRequest request;
    public UpdateDeviceRequest withRequest(UpdateDeviceUpdateDeviceRequest request) {
        this.request = request;
        return this;
    }
    public UpdateDeviceSecurity security;
    public UpdateDeviceRequest withSecurity(UpdateDeviceSecurity security) {
        this.security = security;
        return this;
    }
}