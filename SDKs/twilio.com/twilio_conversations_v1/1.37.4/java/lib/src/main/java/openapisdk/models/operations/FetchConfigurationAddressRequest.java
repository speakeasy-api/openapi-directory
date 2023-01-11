package openapisdk.models.operations;



public class FetchConfigurationAddressRequest {
    public String serverURL;
    public FetchConfigurationAddressRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchConfigurationAddressPathParams pathParams;
    public FetchConfigurationAddressRequest withPathParams(FetchConfigurationAddressPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchConfigurationAddressSecurity security;
    public FetchConfigurationAddressRequest withSecurity(FetchConfigurationAddressSecurity security) {
        this.security = security;
        return this;
    }
}