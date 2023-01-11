package openapisdk.models.operations;



public class BloggerPagesListRequest {
    public BloggerPagesListPathParams pathParams;
    public BloggerPagesListRequest withPathParams(BloggerPagesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BloggerPagesListQueryParams queryParams;
    public BloggerPagesListRequest withQueryParams(BloggerPagesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BloggerPagesListSecurity security;
    public BloggerPagesListRequest withSecurity(BloggerPagesListSecurity security) {
        this.security = security;
        return this;
    }
}