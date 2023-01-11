package openapisdk.models.operations;



public class BloggerPostsRevertResponse {
    public String contentType;
    public BloggerPostsRevertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Post post;
    public BloggerPostsRevertResponse withPost(openapisdk.models.shared.Post post) {
        this.post = post;
        return this;
    }
    public Long statusCode;
    public BloggerPostsRevertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}