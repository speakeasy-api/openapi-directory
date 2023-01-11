package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddVideosToChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channel_id")
    public Double channelId;
    public AddVideosToChannelPathParams withChannelId(Double channelId) {
        this.channelId = channelId;
        return this;
    }
}