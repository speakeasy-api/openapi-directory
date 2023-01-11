package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMarketplaceInstalledAddOnExtensionRequest {
    public String serverURL;
    public UpdateMarketplaceInstalledAddOnExtensionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateMarketplaceInstalledAddOnExtensionPathParams pathParams;
    public UpdateMarketplaceInstalledAddOnExtensionRequest withPathParams(UpdateMarketplaceInstalledAddOnExtensionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateMarketplaceInstalledAddOnExtensionUpdateMarketplaceInstalledAddOnExtensionRequest request;
    public UpdateMarketplaceInstalledAddOnExtensionRequest withRequest(UpdateMarketplaceInstalledAddOnExtensionUpdateMarketplaceInstalledAddOnExtensionRequest request) {
        this.request = request;
        return this;
    }
    public UpdateMarketplaceInstalledAddOnExtensionSecurity security;
    public UpdateMarketplaceInstalledAddOnExtensionRequest withSecurity(UpdateMarketplaceInstalledAddOnExtensionSecurity security) {
        this.security = security;
        return this;
    }
}