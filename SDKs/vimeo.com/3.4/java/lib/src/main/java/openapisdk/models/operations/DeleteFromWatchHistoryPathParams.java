package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFromWatchHistoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public DeleteFromWatchHistoryPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}