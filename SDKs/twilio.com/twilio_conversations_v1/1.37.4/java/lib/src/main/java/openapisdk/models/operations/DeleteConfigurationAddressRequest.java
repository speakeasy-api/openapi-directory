package openapisdk.models.operations;



public class DeleteConfigurationAddressRequest {
    public String serverURL;
    public DeleteConfigurationAddressRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteConfigurationAddressPathParams pathParams;
    public DeleteConfigurationAddressRequest withPathParams(DeleteConfigurationAddressPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteConfigurationAddressSecurity security;
    public DeleteConfigurationAddressRequest withSecurity(DeleteConfigurationAddressSecurity security) {
        this.security = security;
        return this;
    }
}