package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddChannelTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channel_id")
    public Double channelId;
    public AddChannelTagPathParams withChannelId(Double channelId) {
        this.channelId = channelId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=word")
    public String word;
    public AddChannelTagPathParams withWord(String word) {
        this.word = word;
        return this;
    }
}