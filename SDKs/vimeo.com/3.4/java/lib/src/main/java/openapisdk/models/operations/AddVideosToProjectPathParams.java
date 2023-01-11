package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddVideosToProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public Double projectId;
    public AddVideosToProjectPathParams withProjectId(Double projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public AddVideosToProjectPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}