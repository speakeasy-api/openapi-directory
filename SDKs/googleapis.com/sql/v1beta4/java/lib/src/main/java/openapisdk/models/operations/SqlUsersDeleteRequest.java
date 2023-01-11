package openapisdk.models.operations;



public class SqlUsersDeleteRequest {
    public SqlUsersDeletePathParams pathParams;
    public SqlUsersDeleteRequest withPathParams(SqlUsersDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlUsersDeleteQueryParams queryParams;
    public SqlUsersDeleteRequest withQueryParams(SqlUsersDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SqlUsersDeleteSecurity security;
    public SqlUsersDeleteRequest withSecurity(SqlUsersDeleteSecurity security) {
        this.security = security;
        return this;
    }
}