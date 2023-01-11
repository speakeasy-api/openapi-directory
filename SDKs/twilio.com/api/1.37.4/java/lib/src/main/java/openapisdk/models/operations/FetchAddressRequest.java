package openapisdk.models.operations;



public class FetchAddressRequest {
    public String serverURL;
    public FetchAddressRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchAddressPathParams pathParams;
    public FetchAddressRequest withPathParams(FetchAddressPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchAddressSecurity security;
    public FetchAddressRequest withSecurity(FetchAddressSecurity security) {
        this.security = security;
        return this;
    }
}