package openapisdk.models.operations;



public class BloggerPostsGetRequest {
    public BloggerPostsGetPathParams pathParams;
    public BloggerPostsGetRequest withPathParams(BloggerPostsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BloggerPostsGetQueryParams queryParams;
    public BloggerPostsGetRequest withQueryParams(BloggerPostsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BloggerPostsGetSecurity security;
    public BloggerPostsGetRequest withSecurity(BloggerPostsGetSecurity security) {
        this.security = security;
        return this;
    }
}