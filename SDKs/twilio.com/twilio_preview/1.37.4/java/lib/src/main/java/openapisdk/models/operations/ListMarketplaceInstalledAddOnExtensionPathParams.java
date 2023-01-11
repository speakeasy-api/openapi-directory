package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMarketplaceInstalledAddOnExtensionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=InstalledAddOnSid")
    public String installedAddOnSid;
    public ListMarketplaceInstalledAddOnExtensionPathParams withInstalledAddOnSid(String installedAddOnSid) {
        this.installedAddOnSid = installedAddOnSid;
        return this;
    }
}