package openapisdk.models.operations;



public class BloggerCommentsListByBlogRequest {
    public BloggerCommentsListByBlogPathParams pathParams;
    public BloggerCommentsListByBlogRequest withPathParams(BloggerCommentsListByBlogPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BloggerCommentsListByBlogQueryParams queryParams;
    public BloggerCommentsListByBlogRequest withQueryParams(BloggerCommentsListByBlogQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BloggerCommentsListByBlogSecurity security;
    public BloggerCommentsListByBlogRequest withSecurity(BloggerCommentsListByBlogSecurity security) {
        this.security = security;
        return this;
    }
}