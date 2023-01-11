package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRelatedVideosPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public GetRelatedVideosPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}