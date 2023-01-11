package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMarketplaceInstalledAddOnRequest {
    public String serverURL;
    public CreateMarketplaceInstalledAddOnRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateMarketplaceInstalledAddOnCreateMarketplaceInstalledAddOnRequest request;
    public CreateMarketplaceInstalledAddOnRequest withRequest(CreateMarketplaceInstalledAddOnCreateMarketplaceInstalledAddOnRequest request) {
        this.request = request;
        return this;
    }
    public CreateMarketplaceInstalledAddOnSecurity security;
    public CreateMarketplaceInstalledAddOnRequest withSecurity(CreateMarketplaceInstalledAddOnSecurity security) {
        this.security = security;
        return this;
    }
}