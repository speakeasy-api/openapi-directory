package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutTargetsTargetIdIntegrationsSlackPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=target_id")
    public String targetId;
    public PutTargetsTargetIdIntegrationsSlackPathParams withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
}