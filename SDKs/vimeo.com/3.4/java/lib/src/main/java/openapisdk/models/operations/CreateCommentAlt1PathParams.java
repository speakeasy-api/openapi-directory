package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCommentAlt1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channel_id")
    public Double channelId;
    public CreateCommentAlt1PathParams withChannelId(Double channelId) {
        this.channelId = channelId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public CreateCommentAlt1PathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}