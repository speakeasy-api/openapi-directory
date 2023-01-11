package openapisdk.models.operations;



public class ListDeployedDevicesDeviceRequest {
    public String serverURL;
    public ListDeployedDevicesDeviceRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListDeployedDevicesDevicePathParams pathParams;
    public ListDeployedDevicesDeviceRequest withPathParams(ListDeployedDevicesDevicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListDeployedDevicesDeviceQueryParams queryParams;
    public ListDeployedDevicesDeviceRequest withQueryParams(ListDeployedDevicesDeviceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDeployedDevicesDeviceSecurity security;
    public ListDeployedDevicesDeviceRequest withSecurity(ListDeployedDevicesDeviceSecurity security) {
        this.security = security;
        return this;
    }
}