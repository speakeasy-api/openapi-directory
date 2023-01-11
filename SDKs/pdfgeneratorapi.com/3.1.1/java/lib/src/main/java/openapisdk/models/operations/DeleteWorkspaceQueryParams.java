package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteWorkspaceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=workspaceId")
    public String workspaceId;
    public DeleteWorkspaceQueryParams withWorkspaceId(String workspaceId) {
        this.workspaceId = workspaceId;
        return this;
    }
}