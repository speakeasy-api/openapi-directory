package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pretargetingConfig")
    public String pretargetingConfig;
    public RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsPathParams withPretargetingConfig(String pretargetingConfig) {
        this.pretargetingConfig = pretargetingConfig;
        return this;
    }
}