package openapisdk.models.operations;



public class ListBrandVettingRequest {
    public String serverURL;
    public ListBrandVettingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListBrandVettingPathParams pathParams;
    public ListBrandVettingRequest withPathParams(ListBrandVettingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListBrandVettingQueryParams queryParams;
    public ListBrandVettingRequest withQueryParams(ListBrandVettingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListBrandVettingSecurity security;
    public ListBrandVettingRequest withSecurity(ListBrandVettingSecurity security) {
        this.security = security;
        return this;
    }
}