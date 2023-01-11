package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBiddersPretargetingConfigsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public RealtimebiddingBiddersPretargetingConfigsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}