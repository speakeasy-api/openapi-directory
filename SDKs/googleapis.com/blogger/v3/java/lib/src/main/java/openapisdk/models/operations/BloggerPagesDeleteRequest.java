package openapisdk.models.operations;



public class BloggerPagesDeleteRequest {
    public BloggerPagesDeletePathParams pathParams;
    public BloggerPagesDeleteRequest withPathParams(BloggerPagesDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BloggerPagesDeleteQueryParams queryParams;
    public BloggerPagesDeleteRequest withQueryParams(BloggerPagesDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BloggerPagesDeleteSecurity security;
    public BloggerPagesDeleteRequest withSecurity(BloggerPagesDeleteSecurity security) {
        this.security = security;
        return this;
    }
}