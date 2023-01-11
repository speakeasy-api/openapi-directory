package openapisdk.models.operations;



public class FetchMarketplaceInstalledAddOnRequest {
    public String serverURL;
    public FetchMarketplaceInstalledAddOnRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchMarketplaceInstalledAddOnPathParams pathParams;
    public FetchMarketplaceInstalledAddOnRequest withPathParams(FetchMarketplaceInstalledAddOnPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchMarketplaceInstalledAddOnSecurity security;
    public FetchMarketplaceInstalledAddOnRequest withSecurity(FetchMarketplaceInstalledAddOnSecurity security) {
        this.security = security;
        return this;
    }
}