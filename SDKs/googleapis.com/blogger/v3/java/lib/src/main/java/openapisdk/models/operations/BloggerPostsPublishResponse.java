package openapisdk.models.operations;



public class BloggerPostsPublishResponse {
    public String contentType;
    public BloggerPostsPublishResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Post post;
    public BloggerPostsPublishResponse withPost(openapisdk.models.shared.Post post) {
        this.post = post;
        return this;
    }
    public Long statusCode;
    public BloggerPostsPublishResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}