package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddChannelCategoriesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channel_id")
    public Double channelId;
    public AddChannelCategoriesPathParams withChannelId(Double channelId) {
        this.channelId = channelId;
        return this;
    }
}