package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchMarketplaceInstalledAddOnExtensionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=InstalledAddOnSid")
    public String installedAddOnSid;
    public FetchMarketplaceInstalledAddOnExtensionPathParams withInstalledAddOnSid(String installedAddOnSid) {
        this.installedAddOnSid = installedAddOnSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchMarketplaceInstalledAddOnExtensionPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}