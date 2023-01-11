package openapisdk.models.operations;



public class ListMarketplaceAvailableAddOnExtensionRequest {
    public String serverURL;
    public ListMarketplaceAvailableAddOnExtensionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListMarketplaceAvailableAddOnExtensionPathParams pathParams;
    public ListMarketplaceAvailableAddOnExtensionRequest withPathParams(ListMarketplaceAvailableAddOnExtensionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListMarketplaceAvailableAddOnExtensionQueryParams queryParams;
    public ListMarketplaceAvailableAddOnExtensionRequest withQueryParams(ListMarketplaceAvailableAddOnExtensionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListMarketplaceAvailableAddOnExtensionSecurity security;
    public ListMarketplaceAvailableAddOnExtensionRequest withSecurity(ListMarketplaceAvailableAddOnExtensionSecurity security) {
        this.security = security;
        return this;
    }
}