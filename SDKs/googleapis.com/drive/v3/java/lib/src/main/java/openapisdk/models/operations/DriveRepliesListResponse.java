package openapisdk.models.operations;



public class DriveRepliesListResponse {
    public String contentType;
    public DriveRepliesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ReplyList replyList;
    public DriveRepliesListResponse withReplyList(openapisdk.models.shared.ReplyList replyList) {
        this.replyList = replyList;
        return this;
    }
    public Long statusCode;
    public DriveRepliesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}