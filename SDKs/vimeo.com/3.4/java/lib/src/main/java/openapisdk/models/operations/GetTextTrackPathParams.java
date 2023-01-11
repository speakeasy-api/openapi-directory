package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTextTrackPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=texttrack_id")
    public Double texttrackId;
    public GetTextTrackPathParams withTexttrackId(Double texttrackId) {
        this.texttrackId = texttrackId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public GetTextTrackPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}