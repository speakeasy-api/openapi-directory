package openapisdk.models.operations;



public class BloggerBlogUserInfosGetResponse {
    public openapisdk.models.shared.BlogUserInfo blogUserInfo;
    public BloggerBlogUserInfosGetResponse withBlogUserInfo(openapisdk.models.shared.BlogUserInfo blogUserInfo) {
        this.blogUserInfo = blogUserInfo;
        return this;
    }
    public String contentType;
    public BloggerBlogUserInfosGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BloggerBlogUserInfosGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}