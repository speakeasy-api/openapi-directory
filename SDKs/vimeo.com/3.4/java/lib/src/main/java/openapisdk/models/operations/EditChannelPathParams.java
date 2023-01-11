package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channel_id")
    public Double channelId;
    public EditChannelPathParams withChannelId(Double channelId) {
        this.channelId = channelId;
        return this;
    }
}