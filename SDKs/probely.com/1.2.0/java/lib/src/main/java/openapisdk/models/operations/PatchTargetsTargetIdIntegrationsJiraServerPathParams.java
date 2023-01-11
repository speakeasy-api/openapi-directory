package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchTargetsTargetIdIntegrationsJiraServerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=target_id")
    public String targetId;
    public PatchTargetsTargetIdIntegrationsJiraServerPathParams withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
}