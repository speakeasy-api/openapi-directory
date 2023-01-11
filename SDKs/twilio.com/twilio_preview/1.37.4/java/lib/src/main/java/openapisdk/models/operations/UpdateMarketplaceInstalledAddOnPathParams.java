package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMarketplaceInstalledAddOnPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateMarketplaceInstalledAddOnPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}