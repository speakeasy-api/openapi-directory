package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVideoCategoriesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public GetVideoCategoriesPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}