package openapisdk.models.operations;



public class DriveRepliesGetResponse {
    public String contentType;
    public DriveRepliesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Reply reply;
    public DriveRepliesGetResponse withReply(openapisdk.models.shared.Reply reply) {
        this.reply = reply;
        return this;
    }
    public Long statusCode;
    public DriveRepliesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}