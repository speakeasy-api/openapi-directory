package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTextTracksAlt1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channel_id")
    public Double channelId;
    public GetTextTracksAlt1PathParams withChannelId(Double channelId) {
        this.channelId = channelId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public GetTextTracksAlt1PathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}