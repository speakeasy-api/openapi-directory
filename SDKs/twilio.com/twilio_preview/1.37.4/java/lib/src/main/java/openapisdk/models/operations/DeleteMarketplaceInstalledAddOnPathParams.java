package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteMarketplaceInstalledAddOnPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteMarketplaceInstalledAddOnPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}