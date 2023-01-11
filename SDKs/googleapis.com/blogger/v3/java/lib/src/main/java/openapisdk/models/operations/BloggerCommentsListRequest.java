package openapisdk.models.operations;



public class BloggerCommentsListRequest {
    public BloggerCommentsListPathParams pathParams;
    public BloggerCommentsListRequest withPathParams(BloggerCommentsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BloggerCommentsListQueryParams queryParams;
    public BloggerCommentsListRequest withQueryParams(BloggerCommentsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BloggerCommentsListSecurity security;
    public BloggerCommentsListRequest withSecurity(BloggerCommentsListSecurity security) {
        this.security = security;
        return this;
    }
}