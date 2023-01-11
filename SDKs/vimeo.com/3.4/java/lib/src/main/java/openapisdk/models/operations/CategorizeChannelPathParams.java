package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CategorizeChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=category")
    public String category;
    public CategorizeChannelPathParams withCategory(String category) {
        this.category = category;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channel_id")
    public Double channelId;
    public CategorizeChannelPathParams withChannelId(Double channelId) {
        this.channelId = channelId;
        return this;
    }
}