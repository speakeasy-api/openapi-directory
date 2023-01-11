package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostWorkspaceIdMembersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace_id")
    public String workspaceId;
    public PostWorkspaceIdMembersPathParams withWorkspaceId(String workspaceId) {
        this.workspaceId = workspaceId;
        return this;
    }
}