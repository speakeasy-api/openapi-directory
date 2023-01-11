package openapisdk.models.operations;



public class BloggerCommentsGetRequest {
    public BloggerCommentsGetPathParams pathParams;
    public BloggerCommentsGetRequest withPathParams(BloggerCommentsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BloggerCommentsGetQueryParams queryParams;
    public BloggerCommentsGetRequest withQueryParams(BloggerCommentsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BloggerCommentsGetSecurity security;
    public BloggerCommentsGetRequest withSecurity(BloggerCommentsGetSecurity security) {
        this.security = security;
        return this;
    }
}