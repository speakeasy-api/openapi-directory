package openapisdk.models.operations;



public class DeleteMarketplaceInstalledAddOnRequest {
    public String serverURL;
    public DeleteMarketplaceInstalledAddOnRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteMarketplaceInstalledAddOnPathParams pathParams;
    public DeleteMarketplaceInstalledAddOnRequest withPathParams(DeleteMarketplaceInstalledAddOnPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteMarketplaceInstalledAddOnSecurity security;
    public DeleteMarketplaceInstalledAddOnRequest withSecurity(DeleteMarketplaceInstalledAddOnSecurity security) {
        this.security = security;
        return this;
    }
}