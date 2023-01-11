package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckWatchLaterQueuePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public CheckWatchLaterQueuePathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public CheckWatchLaterQueuePathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}