package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMarketplaceInstalledAddOnExtensionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=InstalledAddOnSid")
    public String installedAddOnSid;
    public UpdateMarketplaceInstalledAddOnExtensionPathParams withInstalledAddOnSid(String installedAddOnSid) {
        this.installedAddOnSid = installedAddOnSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateMarketplaceInstalledAddOnExtensionPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}