package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddTagsToChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channel_id")
    public Double channelId;
    public AddTagsToChannelPathParams withChannelId(Double channelId) {
        this.channelId = channelId;
        return this;
    }
}