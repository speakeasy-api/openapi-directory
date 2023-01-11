package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlusCommentsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=commentId")
    public String commentId;
    public PlusCommentsGetPathParams withCommentId(String commentId) {
        this.commentId = commentId;
        return this;
    }
}