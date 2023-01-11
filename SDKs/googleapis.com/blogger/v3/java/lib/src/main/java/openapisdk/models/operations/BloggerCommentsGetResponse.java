package openapisdk.models.operations;



public class BloggerCommentsGetResponse {
    public openapisdk.models.shared.Comment comment;
    public BloggerCommentsGetResponse withComment(openapisdk.models.shared.Comment comment) {
        this.comment = comment;
        return this;
    }
    public String contentType;
    public BloggerCommentsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BloggerCommentsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}