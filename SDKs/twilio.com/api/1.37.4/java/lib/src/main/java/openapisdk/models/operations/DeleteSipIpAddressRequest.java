package openapisdk.models.operations;



public class DeleteSipIpAddressRequest {
    public String serverURL;
    public DeleteSipIpAddressRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteSipIpAddressPathParams pathParams;
    public DeleteSipIpAddressRequest withPathParams(DeleteSipIpAddressPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSipIpAddressSecurity security;
    public DeleteSipIpAddressRequest withSecurity(DeleteSipIpAddressSecurity security) {
        this.security = security;
        return this;
    }
}