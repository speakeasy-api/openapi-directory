package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelVideosPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channel_id")
    public Double channelId;
    public GetChannelVideosPathParams withChannelId(Double channelId) {
        this.channelId = channelId;
        return this;
    }
}