package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCommentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=comment_id")
    public Double commentId;
    public DeleteCommentPathParams withCommentId(Double commentId) {
        this.commentId = commentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public DeleteCommentPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}