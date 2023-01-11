package openapisdk.models.operations;



public class BloggerBlogsGetRequest {
    public BloggerBlogsGetPathParams pathParams;
    public BloggerBlogsGetRequest withPathParams(BloggerBlogsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BloggerBlogsGetQueryParams queryParams;
    public BloggerBlogsGetRequest withQueryParams(BloggerBlogsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BloggerBlogsGetSecurity security;
    public BloggerBlogsGetRequest withSecurity(BloggerBlogsGetSecurity security) {
        this.security = security;
        return this;
    }
}