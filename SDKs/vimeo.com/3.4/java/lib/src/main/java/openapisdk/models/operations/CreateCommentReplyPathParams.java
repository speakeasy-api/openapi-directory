package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCommentReplyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=comment_id")
    public Double commentId;
    public CreateCommentReplyPathParams withCommentId(Double commentId) {
        this.commentId = commentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public CreateCommentReplyPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}