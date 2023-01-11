package openapisdk.models.operations;



public class BloggerBlogsGetByUrlResponse {
    public openapisdk.models.shared.Blog blog;
    public BloggerBlogsGetByUrlResponse withBlog(openapisdk.models.shared.Blog blog) {
        this.blog = blog;
        return this;
    }
    public String contentType;
    public BloggerBlogsGetByUrlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BloggerBlogsGetByUrlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}