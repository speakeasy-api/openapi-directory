package openapisdk.models.operations;



public class SqlUsersListRequest {
    public SqlUsersListPathParams pathParams;
    public SqlUsersListRequest withPathParams(SqlUsersListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlUsersListQueryParams queryParams;
    public SqlUsersListRequest withQueryParams(SqlUsersListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SqlUsersListSecurity security;
    public SqlUsersListRequest withSecurity(SqlUsersListSecurity security) {
        this.security = security;
        return this;
    }
}