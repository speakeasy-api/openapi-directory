package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTargetsTargetIdFindingsReportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=target_id")
    public String targetId;
    public GetTargetsTargetIdFindingsReportPathParams withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
}