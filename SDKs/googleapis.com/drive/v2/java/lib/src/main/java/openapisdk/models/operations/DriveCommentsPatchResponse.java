package openapisdk.models.operations;



public class DriveCommentsPatchResponse {
    public openapisdk.models.shared.Comment comment;
    public DriveCommentsPatchResponse withComment(openapisdk.models.shared.Comment comment) {
        this.comment = comment;
        return this;
    }
    public String contentType;
    public DriveCommentsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DriveCommentsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}