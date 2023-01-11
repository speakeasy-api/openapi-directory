package openapisdk.models.operations;



public class FetchMarketplaceAvailableAddOnRequest {
    public String serverURL;
    public FetchMarketplaceAvailableAddOnRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchMarketplaceAvailableAddOnPathParams pathParams;
    public FetchMarketplaceAvailableAddOnRequest withPathParams(FetchMarketplaceAvailableAddOnPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchMarketplaceAvailableAddOnSecurity security;
    public FetchMarketplaceAvailableAddOnRequest withSecurity(FetchMarketplaceAvailableAddOnSecurity security) {
        this.security = security;
        return this;
    }
}