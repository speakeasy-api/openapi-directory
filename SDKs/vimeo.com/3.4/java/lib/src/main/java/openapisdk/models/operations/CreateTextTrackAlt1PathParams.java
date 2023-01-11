package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTextTrackAlt1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channel_id")
    public Double channelId;
    public CreateTextTrackAlt1PathParams withChannelId(Double channelId) {
        this.channelId = channelId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public CreateTextTrackAlt1PathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}