package openapisdk.models.operations;



public class BloggerPostsSearchRequest {
    public BloggerPostsSearchPathParams pathParams;
    public BloggerPostsSearchRequest withPathParams(BloggerPostsSearchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BloggerPostsSearchQueryParams queryParams;
    public BloggerPostsSearchRequest withQueryParams(BloggerPostsSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BloggerPostsSearchSecurity security;
    public BloggerPostsSearchRequest withSecurity(BloggerPostsSearchSecurity security) {
        this.security = security;
        return this;
    }
}