package openapisdk.models.operations;



public class BloggerBlogsListResponse {
    public openapisdk.models.shared.BlogList blogList;
    public BloggerBlogsListResponse withBlogList(openapisdk.models.shared.BlogList blogList) {
        this.blogList = blogList;
        return this;
    }
    public String contentType;
    public BloggerBlogsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BloggerBlogsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}