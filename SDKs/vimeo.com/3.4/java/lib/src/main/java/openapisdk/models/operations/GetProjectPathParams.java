package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public Double projectId;
    public GetProjectPathParams withProjectId(Double projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public GetProjectPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}