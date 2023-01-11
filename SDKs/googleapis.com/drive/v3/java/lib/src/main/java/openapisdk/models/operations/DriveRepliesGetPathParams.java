package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveRepliesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=commentId")
    public String commentId;
    public DriveRepliesGetPathParams withCommentId(String commentId) {
        this.commentId = commentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileId")
    public String fileId;
    public DriveRepliesGetPathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=replyId")
    public String replyId;
    public DriveRepliesGetPathParams withReplyId(String replyId) {
        this.replyId = replyId;
        return this;
    }
}