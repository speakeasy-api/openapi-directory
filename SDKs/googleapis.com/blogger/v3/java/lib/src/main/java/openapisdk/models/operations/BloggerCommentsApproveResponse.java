package openapisdk.models.operations;



public class BloggerCommentsApproveResponse {
    public openapisdk.models.shared.Comment comment;
    public BloggerCommentsApproveResponse withComment(openapisdk.models.shared.Comment comment) {
        this.comment = comment;
        return this;
    }
    public String contentType;
    public BloggerCommentsApproveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BloggerCommentsApproveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}