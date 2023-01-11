package openapisdk.models.operations;



public class DriveCommentsUpdateResponse {
    public openapisdk.models.shared.Comment comment;
    public DriveCommentsUpdateResponse withComment(openapisdk.models.shared.Comment comment) {
        this.comment = comment;
        return this;
    }
    public String contentType;
    public DriveCommentsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DriveCommentsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}