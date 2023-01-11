package openapisdk.models.operations;



public class GetBlogPostsResponse {
    public openapisdk.models.shared.BlogArticleList blogArticleList;
    public GetBlogPostsResponse withBlogArticleList(openapisdk.models.shared.BlogArticleList blogArticleList) {
        this.blogArticleList = blogArticleList;
        return this;
    }
    public String contentType;
    public GetBlogPostsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetBlogPostsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}