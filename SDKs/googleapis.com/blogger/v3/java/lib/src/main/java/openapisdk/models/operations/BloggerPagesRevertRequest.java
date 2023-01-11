package openapisdk.models.operations;



public class BloggerPagesRevertRequest {
    public BloggerPagesRevertPathParams pathParams;
    public BloggerPagesRevertRequest withPathParams(BloggerPagesRevertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BloggerPagesRevertQueryParams queryParams;
    public BloggerPagesRevertRequest withQueryParams(BloggerPagesRevertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BloggerPagesRevertSecurity security;
    public BloggerPagesRevertRequest withSecurity(BloggerPagesRevertSecurity security) {
        this.security = security;
        return this;
    }
}