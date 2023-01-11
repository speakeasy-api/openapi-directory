package openapisdk.models.operations;



public class ListSipIpAddressRequest {
    public String serverURL;
    public ListSipIpAddressRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSipIpAddressPathParams pathParams;
    public ListSipIpAddressRequest withPathParams(ListSipIpAddressPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListSipIpAddressQueryParams queryParams;
    public ListSipIpAddressRequest withQueryParams(ListSipIpAddressQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSipIpAddressSecurity security;
    public ListSipIpAddressRequest withSecurity(ListSipIpAddressSecurity security) {
        this.security = security;
        return this;
    }
}