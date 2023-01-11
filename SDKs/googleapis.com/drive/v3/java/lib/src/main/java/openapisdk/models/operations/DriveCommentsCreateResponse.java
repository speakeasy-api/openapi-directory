package openapisdk.models.operations;



public class DriveCommentsCreateResponse {
    public openapisdk.models.shared.Comment comment;
    public DriveCommentsCreateResponse withComment(openapisdk.models.shared.Comment comment) {
        this.comment = comment;
        return this;
    }
    public String contentType;
    public DriveCommentsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DriveCommentsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}