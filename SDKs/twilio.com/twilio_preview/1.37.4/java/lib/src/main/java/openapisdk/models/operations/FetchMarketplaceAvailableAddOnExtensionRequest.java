package openapisdk.models.operations;



public class FetchMarketplaceAvailableAddOnExtensionRequest {
    public String serverURL;
    public FetchMarketplaceAvailableAddOnExtensionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchMarketplaceAvailableAddOnExtensionPathParams pathParams;
    public FetchMarketplaceAvailableAddOnExtensionRequest withPathParams(FetchMarketplaceAvailableAddOnExtensionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchMarketplaceAvailableAddOnExtensionSecurity security;
    public FetchMarketplaceAvailableAddOnExtensionRequest withSecurity(FetchMarketplaceAvailableAddOnExtensionSecurity security) {
        this.security = security;
        return this;
    }
}