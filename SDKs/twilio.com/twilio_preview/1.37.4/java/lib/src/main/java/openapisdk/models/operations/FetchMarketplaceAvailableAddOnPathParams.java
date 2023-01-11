package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchMarketplaceAvailableAddOnPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchMarketplaceAvailableAddOnPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}