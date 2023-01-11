package openapisdk.models.operations;



public class FetchMarketplaceInstalledAddOnExtensionRequest {
    public String serverURL;
    public FetchMarketplaceInstalledAddOnExtensionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchMarketplaceInstalledAddOnExtensionPathParams pathParams;
    public FetchMarketplaceInstalledAddOnExtensionRequest withPathParams(FetchMarketplaceInstalledAddOnExtensionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchMarketplaceInstalledAddOnExtensionSecurity security;
    public FetchMarketplaceInstalledAddOnExtensionRequest withSecurity(FetchMarketplaceInstalledAddOnExtensionSecurity security) {
        this.security = security;
        return this;
    }
}