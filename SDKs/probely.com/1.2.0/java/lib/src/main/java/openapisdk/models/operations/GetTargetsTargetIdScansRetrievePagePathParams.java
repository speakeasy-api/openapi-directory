package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTargetsTargetIdScansRetrievePagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=target_id")
    public String targetId;
    public GetTargetsTargetIdScansRetrievePagePathParams withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
}