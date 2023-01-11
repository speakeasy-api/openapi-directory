package openapisdk.models.operations;



public class OsloginUsersGetLoginProfileRequest {
    public OsloginUsersGetLoginProfilePathParams pathParams;
    public OsloginUsersGetLoginProfileRequest withPathParams(OsloginUsersGetLoginProfilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OsloginUsersGetLoginProfileQueryParams queryParams;
    public OsloginUsersGetLoginProfileRequest withQueryParams(OsloginUsersGetLoginProfileQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public OsloginUsersGetLoginProfileSecurity security;
    public OsloginUsersGetLoginProfileRequest withSecurity(OsloginUsersGetLoginProfileSecurity security) {
        this.security = security;
        return this;
    }
}