package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddVideoToGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group_id")
    public Double groupId;
    public AddVideoToGroupPathParams withGroupId(Double groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public AddVideoToGroupPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}