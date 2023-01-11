package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddChannelModeratorsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channel_id")
    public Double channelId;
    public AddChannelModeratorsPathParams withChannelId(Double channelId) {
        this.channelId = channelId;
        return this;
    }
}