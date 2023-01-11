package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBiddersPretargetingConfigsActivatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public RealtimebiddingBiddersPretargetingConfigsActivatePathParams withName(String name) {
        this.name = name;
        return this;
    }
}