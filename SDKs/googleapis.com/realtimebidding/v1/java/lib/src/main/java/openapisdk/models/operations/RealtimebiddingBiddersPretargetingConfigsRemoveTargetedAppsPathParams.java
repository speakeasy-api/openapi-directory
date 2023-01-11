package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pretargetingConfig")
    public String pretargetingConfig;
    public RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsPathParams withPretargetingConfig(String pretargetingConfig) {
        this.pretargetingConfig = pretargetingConfig;
        return this;
    }
}