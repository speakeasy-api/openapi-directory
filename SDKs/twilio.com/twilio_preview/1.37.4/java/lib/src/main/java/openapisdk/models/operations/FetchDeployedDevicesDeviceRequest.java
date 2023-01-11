package openapisdk.models.operations;



public class FetchDeployedDevicesDeviceRequest {
    public String serverURL;
    public FetchDeployedDevicesDeviceRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchDeployedDevicesDevicePathParams pathParams;
    public FetchDeployedDevicesDeviceRequest withPathParams(FetchDeployedDevicesDevicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchDeployedDevicesDeviceSecurity security;
    public FetchDeployedDevicesDeviceRequest withSecurity(FetchDeployedDevicesDeviceSecurity security) {
        this.security = security;
        return this;
    }
}