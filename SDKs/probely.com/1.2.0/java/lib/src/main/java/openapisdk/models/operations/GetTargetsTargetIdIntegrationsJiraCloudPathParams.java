package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTargetsTargetIdIntegrationsJiraCloudPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=target_id")
    public String targetId;
    public GetTargetsTargetIdIntegrationsJiraCloudPathParams withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
}