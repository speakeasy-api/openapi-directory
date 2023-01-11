package openapisdk.models.operations;



public class DeleteAddressRequest {
    public String serverURL;
    public DeleteAddressRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteAddressPathParams pathParams;
    public DeleteAddressRequest withPathParams(DeleteAddressPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteAddressSecurity security;
    public DeleteAddressRequest withSecurity(DeleteAddressSecurity security) {
        this.security = security;
        return this;
    }
}