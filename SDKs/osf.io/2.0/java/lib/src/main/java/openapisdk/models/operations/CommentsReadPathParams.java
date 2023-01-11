package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CommentsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=comment_id")
    public String commentId;
    public CommentsReadPathParams withCommentId(String commentId) {
        this.commentId = commentId;
        return this;
    }
}