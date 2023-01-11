package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutTargetsTargetIdIntegrationsJiraCloudPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=target_id")
    public String targetId;
    public PutTargetsTargetIdIntegrationsJiraCloudPathParams withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
}