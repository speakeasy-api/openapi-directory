package openapisdk.models.operations;



public class BloggerPostUserInfosListRequest {
    public BloggerPostUserInfosListPathParams pathParams;
    public BloggerPostUserInfosListRequest withPathParams(BloggerPostUserInfosListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BloggerPostUserInfosListQueryParams queryParams;
    public BloggerPostUserInfosListRequest withQueryParams(BloggerPostUserInfosListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BloggerPostUserInfosListSecurity security;
    public BloggerPostUserInfosListRequest withSecurity(BloggerPostUserInfosListSecurity security) {
        this.security = security;
        return this;
    }
}