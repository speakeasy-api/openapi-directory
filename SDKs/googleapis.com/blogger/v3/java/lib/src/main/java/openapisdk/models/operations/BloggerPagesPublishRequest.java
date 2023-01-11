package openapisdk.models.operations;



public class BloggerPagesPublishRequest {
    public BloggerPagesPublishPathParams pathParams;
    public BloggerPagesPublishRequest withPathParams(BloggerPagesPublishPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BloggerPagesPublishQueryParams queryParams;
    public BloggerPagesPublishRequest withQueryParams(BloggerPagesPublishQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BloggerPagesPublishSecurity security;
    public BloggerPagesPublishRequest withSecurity(BloggerPagesPublishSecurity security) {
        this.security = security;
        return this;
    }
}