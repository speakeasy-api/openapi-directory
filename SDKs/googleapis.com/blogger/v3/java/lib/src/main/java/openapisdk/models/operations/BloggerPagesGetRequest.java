package openapisdk.models.operations;



public class BloggerPagesGetRequest {
    public BloggerPagesGetPathParams pathParams;
    public BloggerPagesGetRequest withPathParams(BloggerPagesGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BloggerPagesGetQueryParams queryParams;
    public BloggerPagesGetRequest withQueryParams(BloggerPagesGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BloggerPagesGetSecurity security;
    public BloggerPagesGetRequest withSecurity(BloggerPagesGetSecurity security) {
        this.security = security;
        return this;
    }
}