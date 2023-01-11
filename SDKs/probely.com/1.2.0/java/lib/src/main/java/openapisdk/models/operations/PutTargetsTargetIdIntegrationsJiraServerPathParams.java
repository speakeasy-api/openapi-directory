package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutTargetsTargetIdIntegrationsJiraServerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=target_id")
    public String targetId;
    public PutTargetsTargetIdIntegrationsJiraServerPathParams withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
}