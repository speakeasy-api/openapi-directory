package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckIfChannelHasTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channel_id")
    public Double channelId;
    public CheckIfChannelHasTagPathParams withChannelId(Double channelId) {
        this.channelId = channelId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=word")
    public String word;
    public CheckIfChannelHasTagPathParams withWord(String word) {
        this.word = word;
        return this;
    }
}