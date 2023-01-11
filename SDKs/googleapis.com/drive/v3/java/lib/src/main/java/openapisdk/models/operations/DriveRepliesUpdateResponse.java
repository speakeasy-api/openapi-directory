package openapisdk.models.operations;



public class DriveRepliesUpdateResponse {
    public String contentType;
    public DriveRepliesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Reply reply;
    public DriveRepliesUpdateResponse withReply(openapisdk.models.shared.Reply reply) {
        this.reply = reply;
        return this;
    }
    public Long statusCode;
    public DriveRepliesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}