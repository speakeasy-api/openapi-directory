package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddVideoCreditPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public AddVideoCreditPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}