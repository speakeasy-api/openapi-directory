package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVideoTagsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public GetVideoTagsPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}