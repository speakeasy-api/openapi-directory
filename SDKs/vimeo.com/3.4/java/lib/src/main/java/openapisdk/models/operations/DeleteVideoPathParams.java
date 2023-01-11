package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteVideoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public DeleteVideoPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}