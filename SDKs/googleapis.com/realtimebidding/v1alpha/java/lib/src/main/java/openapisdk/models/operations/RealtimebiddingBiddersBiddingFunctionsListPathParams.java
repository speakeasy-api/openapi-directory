package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBiddersBiddingFunctionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RealtimebiddingBiddersBiddingFunctionsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}