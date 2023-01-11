package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBiddersPretargetingConfigsSuspendPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public RealtimebiddingBiddersPretargetingConfigsSuspendPathParams withName(String name) {
        this.name = name;
        return this;
    }
}