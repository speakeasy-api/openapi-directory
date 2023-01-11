package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditTextTrackPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=texttrack_id")
    public Double texttrackId;
    public EditTextTrackPathParams withTexttrackId(Double texttrackId) {
        this.texttrackId = texttrackId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public EditTextTrackPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}