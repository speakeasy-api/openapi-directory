package openapisdk.models.operations;



public class FetchSipIpAddressRequest {
    public String serverURL;
    public FetchSipIpAddressRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSipIpAddressPathParams pathParams;
    public FetchSipIpAddressRequest withPathParams(FetchSipIpAddressPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSipIpAddressSecurity security;
    public FetchSipIpAddressRequest withSecurity(FetchSipIpAddressSecurity security) {
        this.security = security;
        return this;
    }
}