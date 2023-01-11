package openapisdk.models.operations;



public class ListMarketplaceInstalledAddOnRequest {
    public String serverURL;
    public ListMarketplaceInstalledAddOnRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListMarketplaceInstalledAddOnQueryParams queryParams;
    public ListMarketplaceInstalledAddOnRequest withQueryParams(ListMarketplaceInstalledAddOnQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListMarketplaceInstalledAddOnSecurity security;
    public ListMarketplaceInstalledAddOnRequest withSecurity(ListMarketplaceInstalledAddOnSecurity security) {
        this.security = security;
        return this;
    }
}