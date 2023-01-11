package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveRepliesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=commentId")
    public String commentId;
    public DriveRepliesDeletePathParams withCommentId(String commentId) {
        this.commentId = commentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileId")
    public String fileId;
    public DriveRepliesDeletePathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=replyId")
    public String replyId;
    public DriveRepliesDeletePathParams withReplyId(String replyId) {
        this.replyId = replyId;
        return this;
    }
}