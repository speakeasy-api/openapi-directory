package openapisdk.models.operations;



public class FetchDeviceRequest {
    public String serverURL;
    public FetchDeviceRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchDevicePathParams pathParams;
    public FetchDeviceRequest withPathParams(FetchDevicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchDeviceSecurity security;
    public FetchDeviceRequest withSecurity(FetchDeviceSecurity security) {
        this.security = security;
        return this;
    }
}