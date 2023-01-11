package openapisdk.models.operations;



public class BloggerPostsListRequest {
    public BloggerPostsListPathParams pathParams;
    public BloggerPostsListRequest withPathParams(BloggerPostsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BloggerPostsListQueryParams queryParams;
    public BloggerPostsListRequest withQueryParams(BloggerPostsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BloggerPostsListSecurity security;
    public BloggerPostsListRequest withSecurity(BloggerPostsListSecurity security) {
        this.security = security;
        return this;
    }
}