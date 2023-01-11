package openapisdk.models.operations;



public class BloggerPostUserInfosGetRequest {
    public BloggerPostUserInfosGetPathParams pathParams;
    public BloggerPostUserInfosGetRequest withPathParams(BloggerPostUserInfosGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BloggerPostUserInfosGetQueryParams queryParams;
    public BloggerPostUserInfosGetRequest withQueryParams(BloggerPostUserInfosGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BloggerPostUserInfosGetSecurity security;
    public BloggerPostUserInfosGetRequest withSecurity(BloggerPostUserInfosGetSecurity security) {
        this.security = security;
        return this;
    }
}