package openapisdk.models.operations;



public class ListMarketplaceAvailableAddOnRequest {
    public String serverURL;
    public ListMarketplaceAvailableAddOnRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListMarketplaceAvailableAddOnQueryParams queryParams;
    public ListMarketplaceAvailableAddOnRequest withQueryParams(ListMarketplaceAvailableAddOnQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListMarketplaceAvailableAddOnSecurity security;
    public ListMarketplaceAvailableAddOnRequest withSecurity(ListMarketplaceAvailableAddOnSecurity security) {
        this.security = security;
        return this;
    }
}