package openapisdk.models.operations;



public class BloggerPostsGetByPathResponse {
    public String contentType;
    public BloggerPostsGetByPathResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Post post;
    public BloggerPostsGetByPathResponse withPost(openapisdk.models.shared.Post post) {
        this.post = post;
        return this;
    }
    public Long statusCode;
    public BloggerPostsGetByPathResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}