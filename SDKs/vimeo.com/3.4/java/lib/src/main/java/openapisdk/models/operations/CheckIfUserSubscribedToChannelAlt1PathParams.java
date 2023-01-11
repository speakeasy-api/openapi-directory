package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckIfUserSubscribedToChannelAlt1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channel_id")
    public Double channelId;
    public CheckIfUserSubscribedToChannelAlt1PathParams withChannelId(Double channelId) {
        this.channelId = channelId;
        return this;
    }
}