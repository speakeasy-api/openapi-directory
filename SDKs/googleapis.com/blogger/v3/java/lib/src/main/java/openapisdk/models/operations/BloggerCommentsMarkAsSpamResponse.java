package openapisdk.models.operations;



public class BloggerCommentsMarkAsSpamResponse {
    public openapisdk.models.shared.Comment comment;
    public BloggerCommentsMarkAsSpamResponse withComment(openapisdk.models.shared.Comment comment) {
        this.comment = comment;
        return this;
    }
    public String contentType;
    public BloggerCommentsMarkAsSpamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BloggerCommentsMarkAsSpamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}