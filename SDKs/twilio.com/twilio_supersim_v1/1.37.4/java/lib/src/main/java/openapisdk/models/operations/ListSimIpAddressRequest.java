package openapisdk.models.operations;



public class ListSimIpAddressRequest {
    public String serverURL;
    public ListSimIpAddressRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSimIpAddressPathParams pathParams;
    public ListSimIpAddressRequest withPathParams(ListSimIpAddressPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListSimIpAddressQueryParams queryParams;
    public ListSimIpAddressRequest withQueryParams(ListSimIpAddressQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSimIpAddressSecurity security;
    public ListSimIpAddressRequest withSecurity(ListSimIpAddressSecurity security) {
        this.security = security;
        return this;
    }
}