package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCommentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public GetCommentsPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}