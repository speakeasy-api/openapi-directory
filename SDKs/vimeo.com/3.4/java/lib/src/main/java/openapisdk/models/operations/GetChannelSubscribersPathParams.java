package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelSubscribersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channel_id")
    public Double channelId;
    public GetChannelSubscribersPathParams withChannelId(Double channelId) {
        this.channelId = channelId;
        return this;
    }
}