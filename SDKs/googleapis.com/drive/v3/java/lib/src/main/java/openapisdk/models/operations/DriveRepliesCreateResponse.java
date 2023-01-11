package openapisdk.models.operations;



public class DriveRepliesCreateResponse {
    public String contentType;
    public DriveRepliesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Reply reply;
    public DriveRepliesCreateResponse withReply(openapisdk.models.shared.Reply reply) {
        this.reply = reply;
        return this;
    }
    public Long statusCode;
    public DriveRepliesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}