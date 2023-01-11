package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBiddersPretargetingConfigsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RealtimebiddingBiddersPretargetingConfigsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}