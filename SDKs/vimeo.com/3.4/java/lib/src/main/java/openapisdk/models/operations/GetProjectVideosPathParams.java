package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProjectVideosPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public Double projectId;
    public GetProjectVideosPathParams withProjectId(Double projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public GetProjectVideosPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}