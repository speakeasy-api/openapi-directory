package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMarketplaceInstalledAddOnUpdateMarketplaceInstalledAddOnRequest {
    @SpeakeasyMetadata("form:name=Configuration")
    public Object configuration;
    public UpdateMarketplaceInstalledAddOnUpdateMarketplaceInstalledAddOnRequest withConfiguration(Object configuration) {
        this.configuration = configuration;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public UpdateMarketplaceInstalledAddOnUpdateMarketplaceInstalledAddOnRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}