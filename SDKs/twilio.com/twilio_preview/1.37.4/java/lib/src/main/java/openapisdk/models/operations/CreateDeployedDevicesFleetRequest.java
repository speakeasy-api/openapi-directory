package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDeployedDevicesFleetRequest {
    public String serverURL;
    public CreateDeployedDevicesFleetRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateDeployedDevicesFleetCreateDeployedDevicesFleetRequest request;
    public CreateDeployedDevicesFleetRequest withRequest(CreateDeployedDevicesFleetCreateDeployedDevicesFleetRequest request) {
        this.request = request;
        return this;
    }
    public CreateDeployedDevicesFleetSecurity security;
    public CreateDeployedDevicesFleetRequest withSecurity(CreateDeployedDevicesFleetSecurity security) {
        this.security = security;
        return this;
    }
}