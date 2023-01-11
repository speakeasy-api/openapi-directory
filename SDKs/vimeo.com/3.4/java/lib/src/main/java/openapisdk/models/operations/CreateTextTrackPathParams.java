package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTextTrackPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public CreateTextTrackPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}