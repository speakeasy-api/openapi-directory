package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostWorkspaceIdActivitiesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace_id")
    public String workspaceId;
    public PostWorkspaceIdActivitiesPathParams withWorkspaceId(String workspaceId) {
        this.workspaceId = workspaceId;
        return this;
    }
}