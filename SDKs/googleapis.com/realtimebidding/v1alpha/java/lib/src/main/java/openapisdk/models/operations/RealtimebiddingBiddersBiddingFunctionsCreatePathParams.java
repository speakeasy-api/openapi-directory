package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBiddersBiddingFunctionsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RealtimebiddingBiddersBiddingFunctionsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}