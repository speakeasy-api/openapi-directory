package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTargetsTargetIdSeverityTrendPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=target_id")
    public String targetId;
    public GetTargetsTargetIdSeverityTrendPathParams withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
}