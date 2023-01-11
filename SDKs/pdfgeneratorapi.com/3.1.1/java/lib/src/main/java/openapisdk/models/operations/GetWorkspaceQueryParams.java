package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkspaceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=workspaceId")
    public String workspaceId;
    public GetWorkspaceQueryParams withWorkspaceId(String workspaceId) {
        this.workspaceId = workspaceId;
        return this;
    }
}