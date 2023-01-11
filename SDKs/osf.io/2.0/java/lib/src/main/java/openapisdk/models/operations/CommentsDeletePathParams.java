package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CommentsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=comment_id")
    public String commentId;
    public CommentsDeletePathParams withCommentId(String commentId) {
        this.commentId = commentId;
        return this;
    }
}