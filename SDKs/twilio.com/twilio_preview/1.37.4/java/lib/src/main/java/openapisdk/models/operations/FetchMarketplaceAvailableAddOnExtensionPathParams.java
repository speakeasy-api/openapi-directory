package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchMarketplaceAvailableAddOnExtensionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AvailableAddOnSid")
    public String availableAddOnSid;
    public FetchMarketplaceAvailableAddOnExtensionPathParams withAvailableAddOnSid(String availableAddOnSid) {
        this.availableAddOnSid = availableAddOnSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchMarketplaceAvailableAddOnExtensionPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}