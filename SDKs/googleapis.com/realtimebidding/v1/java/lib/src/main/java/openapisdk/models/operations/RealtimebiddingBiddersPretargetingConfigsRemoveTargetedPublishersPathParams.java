package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pretargetingConfig")
    public String pretargetingConfig;
    public RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersPathParams withPretargetingConfig(String pretargetingConfig) {
        this.pretargetingConfig = pretargetingConfig;
        return this;
    }
}