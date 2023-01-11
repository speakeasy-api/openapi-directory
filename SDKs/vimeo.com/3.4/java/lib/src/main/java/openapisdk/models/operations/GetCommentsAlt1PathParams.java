package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCommentsAlt1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channel_id")
    public Double channelId;
    public GetCommentsAlt1PathParams withChannelId(Double channelId) {
        this.channelId = channelId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public GetCommentsAlt1PathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}