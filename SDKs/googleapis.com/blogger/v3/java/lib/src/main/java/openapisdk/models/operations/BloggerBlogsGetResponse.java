package openapisdk.models.operations;



public class BloggerBlogsGetResponse {
    public openapisdk.models.shared.Blog blog;
    public BloggerBlogsGetResponse withBlog(openapisdk.models.shared.Blog blog) {
        this.blog = blog;
        return this;
    }
    public String contentType;
    public BloggerBlogsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BloggerBlogsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}