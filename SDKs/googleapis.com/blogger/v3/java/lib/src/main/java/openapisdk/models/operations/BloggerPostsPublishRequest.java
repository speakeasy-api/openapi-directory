package openapisdk.models.operations;



public class BloggerPostsPublishRequest {
    public BloggerPostsPublishPathParams pathParams;
    public BloggerPostsPublishRequest withPathParams(BloggerPostsPublishPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BloggerPostsPublishQueryParams queryParams;
    public BloggerPostsPublishRequest withQueryParams(BloggerPostsPublishQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BloggerPostsPublishSecurity security;
    public BloggerPostsPublishRequest withSecurity(BloggerPostsPublishSecurity security) {
        this.security = security;
        return this;
    }
}