package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGroupVideoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group_id")
    public Double groupId;
    public GetGroupVideoPathParams withGroupId(Double groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public GetGroupVideoPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}