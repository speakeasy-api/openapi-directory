package openapisdk.models.operations;



public class BloggerBlogsListRequest {
    public BloggerBlogsListPathParams pathParams;
    public BloggerBlogsListRequest withPathParams(BloggerBlogsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BloggerBlogsListQueryParams queryParams;
    public BloggerBlogsListRequest withQueryParams(BloggerBlogsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BloggerBlogsListSecurity security;
    public BloggerBlogsListRequest withSecurity(BloggerBlogsListSecurity security) {
        this.security = security;
        return this;
    }
}