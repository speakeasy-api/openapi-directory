package openapisdk.models.operations;



public class BloggerCommentsRemoveContentResponse {
    public openapisdk.models.shared.Comment comment;
    public BloggerCommentsRemoveContentResponse withComment(openapisdk.models.shared.Comment comment) {
        this.comment = comment;
        return this;
    }
    public String contentType;
    public BloggerCommentsRemoveContentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BloggerCommentsRemoveContentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}