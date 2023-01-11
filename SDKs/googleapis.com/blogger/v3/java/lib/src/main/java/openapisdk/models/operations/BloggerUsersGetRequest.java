package openapisdk.models.operations;



public class BloggerUsersGetRequest {
    public BloggerUsersGetPathParams pathParams;
    public BloggerUsersGetRequest withPathParams(BloggerUsersGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BloggerUsersGetQueryParams queryParams;
    public BloggerUsersGetRequest withQueryParams(BloggerUsersGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BloggerUsersGetSecurity security;
    public BloggerUsersGetRequest withSecurity(BloggerUsersGetSecurity security) {
        this.security = security;
        return this;
    }
}