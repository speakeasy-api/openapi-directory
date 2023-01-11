package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddVideoTagsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public AddVideoTagsPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}