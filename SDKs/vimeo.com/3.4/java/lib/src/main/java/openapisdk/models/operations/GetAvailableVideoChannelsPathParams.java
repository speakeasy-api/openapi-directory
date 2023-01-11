package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAvailableVideoChannelsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public GetAvailableVideoChannelsPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}