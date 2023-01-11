package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddVideoToProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public Double projectId;
    public AddVideoToProjectPathParams withProjectId(Double projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public AddVideoToProjectPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public AddVideoToProjectPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}