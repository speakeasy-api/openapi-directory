package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteChannelCategoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=category")
    public String category;
    public DeleteChannelCategoryPathParams withCategory(String category) {
        this.category = category;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channel_id")
    public Double channelId;
    public DeleteChannelCategoryPathParams withChannelId(Double channelId) {
        this.channelId = channelId;
        return this;
    }
}