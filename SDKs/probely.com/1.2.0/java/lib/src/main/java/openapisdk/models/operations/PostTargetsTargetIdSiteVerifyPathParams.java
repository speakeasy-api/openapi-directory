package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTargetsTargetIdSiteVerifyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=target_id")
    public String targetId;
    public PostTargetsTargetIdSiteVerifyPathParams withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
}