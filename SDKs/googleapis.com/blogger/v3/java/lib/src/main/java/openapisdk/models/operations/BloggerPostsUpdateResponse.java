package openapisdk.models.operations;



public class BloggerPostsUpdateResponse {
    public String contentType;
    public BloggerPostsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Post post;
    public BloggerPostsUpdateResponse withPost(openapisdk.models.shared.Post post) {
        this.post = post;
        return this;
    }
    public Long statusCode;
    public BloggerPostsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}