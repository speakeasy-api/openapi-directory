package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckWatchLaterQueueAlt1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public CheckWatchLaterQueueAlt1PathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}