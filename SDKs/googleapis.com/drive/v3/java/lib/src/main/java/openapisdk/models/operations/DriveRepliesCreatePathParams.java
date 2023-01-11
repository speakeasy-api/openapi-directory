package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveRepliesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=commentId")
    public String commentId;
    public DriveRepliesCreatePathParams withCommentId(String commentId) {
        this.commentId = commentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileId")
    public String fileId;
    public DriveRepliesCreatePathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}