package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMarketplaceAvailableAddOnExtensionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AvailableAddOnSid")
    public String availableAddOnSid;
    public ListMarketplaceAvailableAddOnExtensionPathParams withAvailableAddOnSid(String availableAddOnSid) {
        this.availableAddOnSid = availableAddOnSid;
        return this;
    }
}