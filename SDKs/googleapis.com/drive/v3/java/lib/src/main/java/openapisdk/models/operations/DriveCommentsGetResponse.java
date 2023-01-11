package openapisdk.models.operations;



public class DriveCommentsGetResponse {
    public openapisdk.models.shared.Comment comment;
    public DriveCommentsGetResponse withComment(openapisdk.models.shared.Comment comment) {
        this.comment = comment;
        return this;
    }
    public String contentType;
    public DriveCommentsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DriveCommentsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}