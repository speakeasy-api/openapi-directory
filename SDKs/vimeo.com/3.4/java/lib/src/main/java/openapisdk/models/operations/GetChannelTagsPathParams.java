package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelTagsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channel_id")
    public Double channelId;
    public GetChannelTagsPathParams withChannelId(Double channelId) {
        this.channelId = channelId;
        return this;
    }
}