package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CommentsPutPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=comment_id")
    public String commentId;
    public CommentsPutPathParams withCommentId(String commentId) {
        this.commentId = commentId;
        return this;
    }
}