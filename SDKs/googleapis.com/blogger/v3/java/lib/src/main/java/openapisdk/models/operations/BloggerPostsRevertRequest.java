package openapisdk.models.operations;



public class BloggerPostsRevertRequest {
    public BloggerPostsRevertPathParams pathParams;
    public BloggerPostsRevertRequest withPathParams(BloggerPostsRevertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BloggerPostsRevertQueryParams queryParams;
    public BloggerPostsRevertRequest withQueryParams(BloggerPostsRevertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BloggerPostsRevertSecurity security;
    public BloggerPostsRevertRequest withSecurity(BloggerPostsRevertSecurity security) {
        this.security = security;
        return this;
    }
}