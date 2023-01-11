package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelModeratorsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channel_id")
    public Double channelId;
    public GetChannelModeratorsPathParams withChannelId(Double channelId) {
        this.channelId = channelId;
        return this;
    }
}