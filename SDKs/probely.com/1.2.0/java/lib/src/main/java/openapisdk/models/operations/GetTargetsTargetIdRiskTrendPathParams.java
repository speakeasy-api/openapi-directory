package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTargetsTargetIdRiskTrendPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=target_id")
    public String targetId;
    public GetTargetsTargetIdRiskTrendPathParams withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
}