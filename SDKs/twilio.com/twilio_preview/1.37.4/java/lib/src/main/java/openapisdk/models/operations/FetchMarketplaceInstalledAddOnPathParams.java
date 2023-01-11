package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchMarketplaceInstalledAddOnPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchMarketplaceInstalledAddOnPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}