package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelCategoriesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channel_id")
    public Double channelId;
    public GetChannelCategoriesPathParams withChannelId(Double channelId) {
        this.channelId = channelId;
        return this;
    }
}