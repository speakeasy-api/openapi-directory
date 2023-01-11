package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pretargetingConfig")
    public String pretargetingConfig;
    public RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersPathParams withPretargetingConfig(String pretargetingConfig) {
        this.pretargetingConfig = pretargetingConfig;
        return this;
    }
}