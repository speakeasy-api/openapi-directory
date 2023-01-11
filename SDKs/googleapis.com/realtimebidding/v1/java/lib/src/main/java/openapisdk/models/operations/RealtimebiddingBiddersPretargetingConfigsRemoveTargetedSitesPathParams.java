package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pretargetingConfig")
    public String pretargetingConfig;
    public RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesPathParams withPretargetingConfig(String pretargetingConfig) {
        this.pretargetingConfig = pretargetingConfig;
        return this;
    }
}