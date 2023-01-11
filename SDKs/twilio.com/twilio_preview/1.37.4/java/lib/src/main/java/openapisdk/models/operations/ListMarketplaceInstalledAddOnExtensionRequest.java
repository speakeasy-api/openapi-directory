package openapisdk.models.operations;



public class ListMarketplaceInstalledAddOnExtensionRequest {
    public String serverURL;
    public ListMarketplaceInstalledAddOnExtensionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListMarketplaceInstalledAddOnExtensionPathParams pathParams;
    public ListMarketplaceInstalledAddOnExtensionRequest withPathParams(ListMarketplaceInstalledAddOnExtensionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListMarketplaceInstalledAddOnExtensionQueryParams queryParams;
    public ListMarketplaceInstalledAddOnExtensionRequest withQueryParams(ListMarketplaceInstalledAddOnExtensionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListMarketplaceInstalledAddOnExtensionSecurity security;
    public ListMarketplaceInstalledAddOnExtensionRequest withSecurity(ListMarketplaceInstalledAddOnExtensionSecurity security) {
        this.security = security;
        return this;
    }
}