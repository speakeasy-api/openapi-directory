package openapisdk.models.operations;



public class ListAddressRequest {
    public String serverURL;
    public ListAddressRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListAddressPathParams pathParams;
    public ListAddressRequest withPathParams(ListAddressPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListAddressQueryParams queryParams;
    public ListAddressRequest withQueryParams(ListAddressQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAddressSecurity security;
    public ListAddressRequest withSecurity(ListAddressSecurity security) {
        this.security = security;
        return this;
    }
}