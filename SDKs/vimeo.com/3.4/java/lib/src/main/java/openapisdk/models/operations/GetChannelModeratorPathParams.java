package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelModeratorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channel_id")
    public Double channelId;
    public GetChannelModeratorPathParams withChannelId(Double channelId) {
        this.channelId = channelId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public GetChannelModeratorPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}