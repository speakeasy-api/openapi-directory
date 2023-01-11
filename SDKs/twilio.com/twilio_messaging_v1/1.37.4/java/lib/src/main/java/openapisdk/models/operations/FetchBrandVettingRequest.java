package openapisdk.models.operations;



public class FetchBrandVettingRequest {
    public String serverURL;
    public FetchBrandVettingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchBrandVettingPathParams pathParams;
    public FetchBrandVettingRequest withPathParams(FetchBrandVettingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchBrandVettingSecurity security;
    public FetchBrandVettingRequest withSecurity(FetchBrandVettingSecurity security) {
        this.security = security;
        return this;
    }
}