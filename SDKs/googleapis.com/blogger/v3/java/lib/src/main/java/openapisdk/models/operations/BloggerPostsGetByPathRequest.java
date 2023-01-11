package openapisdk.models.operations;



public class BloggerPostsGetByPathRequest {
    public BloggerPostsGetByPathPathParams pathParams;
    public BloggerPostsGetByPathRequest withPathParams(BloggerPostsGetByPathPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BloggerPostsGetByPathQueryParams queryParams;
    public BloggerPostsGetByPathRequest withQueryParams(BloggerPostsGetByPathQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BloggerPostsGetByPathSecurity security;
    public BloggerPostsGetByPathRequest withSecurity(BloggerPostsGetByPathSecurity security) {
        this.security = security;
        return this;
    }
}