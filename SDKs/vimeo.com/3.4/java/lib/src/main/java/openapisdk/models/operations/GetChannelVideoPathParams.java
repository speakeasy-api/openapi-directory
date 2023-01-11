package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelVideoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channel_id")
    public Double channelId;
    public GetChannelVideoPathParams withChannelId(Double channelId) {
        this.channelId = channelId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public GetChannelVideoPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}