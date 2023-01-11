package openapisdk.models.operations;



public class BloggerBlogsListByUserResponse {
    public openapisdk.models.shared.BlogList blogList;
    public BloggerBlogsListByUserResponse withBlogList(openapisdk.models.shared.BlogList blogList) {
        this.blogList = blogList;
        return this;
    }
    public String contentType;
    public BloggerBlogsListByUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BloggerBlogsListByUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}