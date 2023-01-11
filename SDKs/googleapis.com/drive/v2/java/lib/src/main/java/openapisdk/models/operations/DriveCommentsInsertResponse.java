package openapisdk.models.operations;



public class DriveCommentsInsertResponse {
    public openapisdk.models.shared.Comment comment;
    public DriveCommentsInsertResponse withComment(openapisdk.models.shared.Comment comment) {
        this.comment = comment;
        return this;
    }
    public String contentType;
    public DriveCommentsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DriveCommentsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}