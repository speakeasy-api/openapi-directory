package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVideoThumbnailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public GetVideoThumbnailsPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}