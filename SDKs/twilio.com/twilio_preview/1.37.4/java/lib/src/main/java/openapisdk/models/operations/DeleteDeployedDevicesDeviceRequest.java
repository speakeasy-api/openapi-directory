package openapisdk.models.operations;



public class DeleteDeployedDevicesDeviceRequest {
    public String serverURL;
    public DeleteDeployedDevicesDeviceRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteDeployedDevicesDevicePathParams pathParams;
    public DeleteDeployedDevicesDeviceRequest withPathParams(DeleteDeployedDevicesDevicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteDeployedDevicesDeviceSecurity security;
    public DeleteDeployedDevicesDeviceRequest withSecurity(DeleteDeployedDevicesDeviceSecurity security) {
        this.security = security;
        return this;
    }
}