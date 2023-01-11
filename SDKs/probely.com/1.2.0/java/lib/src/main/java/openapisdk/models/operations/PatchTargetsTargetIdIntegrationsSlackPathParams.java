package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchTargetsTargetIdIntegrationsSlackPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=target_id")
    public String targetId;
    public PatchTargetsTargetIdIntegrationsSlackPathParams withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
}