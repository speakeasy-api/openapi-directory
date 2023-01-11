package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channel_id")
    public Double channelId;
    public DeleteChannelPathParams withChannelId(Double channelId) {
        this.channelId = channelId;
        return this;
    }
}