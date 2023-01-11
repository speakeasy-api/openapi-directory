package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVideoThumbnailPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public CreateVideoThumbnailPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}