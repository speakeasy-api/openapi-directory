package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMarketplaceInstalledAddOnExtensionUpdateMarketplaceInstalledAddOnExtensionRequest {
    @SpeakeasyMetadata("form:name=Enabled")
    public Boolean enabled;
    public UpdateMarketplaceInstalledAddOnExtensionUpdateMarketplaceInstalledAddOnExtensionRequest withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}