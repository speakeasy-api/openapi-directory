package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTextTracksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public GetTextTracksPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}