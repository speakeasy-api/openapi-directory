package openapisdk.models.operations;



public class BloggerBlogsGetByUrlRequest {
    public BloggerBlogsGetByUrlQueryParams queryParams;
    public BloggerBlogsGetByUrlRequest withQueryParams(BloggerBlogsGetByUrlQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BloggerBlogsGetByUrlSecurity security;
    public BloggerBlogsGetByUrlRequest withSecurity(BloggerBlogsGetByUrlSecurity security) {
        this.security = security;
        return this;
    }
}