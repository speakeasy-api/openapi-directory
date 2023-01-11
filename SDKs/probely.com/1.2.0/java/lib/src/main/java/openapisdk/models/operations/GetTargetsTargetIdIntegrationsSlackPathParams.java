package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTargetsTargetIdIntegrationsSlackPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=target_id")
    public String targetId;
    public GetTargetsTargetIdIntegrationsSlackPathParams withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
}