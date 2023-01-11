package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddChannelModeratorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channel_id")
    public Double channelId;
    public AddChannelModeratorPathParams withChannelId(Double channelId) {
        this.channelId = channelId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public AddChannelModeratorPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}