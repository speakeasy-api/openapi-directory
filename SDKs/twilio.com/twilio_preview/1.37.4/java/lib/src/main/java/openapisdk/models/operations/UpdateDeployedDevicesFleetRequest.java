package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeployedDevicesFleetRequest {
    public String serverURL;
    public UpdateDeployedDevicesFleetRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateDeployedDevicesFleetPathParams pathParams;
    public UpdateDeployedDevicesFleetRequest withPathParams(UpdateDeployedDevicesFleetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateDeployedDevicesFleetUpdateDeployedDevicesFleetRequest request;
    public UpdateDeployedDevicesFleetRequest withRequest(UpdateDeployedDevicesFleetUpdateDeployedDevicesFleetRequest request) {
        this.request = request;
        return this;
    }
    public UpdateDeployedDevicesFleetSecurity security;
    public UpdateDeployedDevicesFleetRequest withSecurity(UpdateDeployedDevicesFleetSecurity security) {
        this.security = security;
        return this;
    }
}