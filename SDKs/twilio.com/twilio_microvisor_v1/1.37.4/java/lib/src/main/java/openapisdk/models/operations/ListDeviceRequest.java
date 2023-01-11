package openapisdk.models.operations;



public class ListDeviceRequest {
    public String serverURL;
    public ListDeviceRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListDeviceQueryParams queryParams;
    public ListDeviceRequest withQueryParams(ListDeviceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDeviceSecurity security;
    public ListDeviceRequest withSecurity(ListDeviceSecurity security) {
        this.security = security;
        return this;
    }
}