package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVideoLikesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public GetVideoLikesPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}