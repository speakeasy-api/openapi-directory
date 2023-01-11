package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVideoCreditsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public GetVideoCreditsPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}