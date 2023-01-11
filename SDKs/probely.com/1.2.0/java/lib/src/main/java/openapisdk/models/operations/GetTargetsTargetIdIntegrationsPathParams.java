package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTargetsTargetIdIntegrationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=target_id")
    public String targetId;
    public GetTargetsTargetIdIntegrationsPathParams withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
}