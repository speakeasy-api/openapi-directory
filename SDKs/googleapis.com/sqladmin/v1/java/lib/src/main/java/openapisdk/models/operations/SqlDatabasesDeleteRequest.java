package openapisdk.models.operations;



public class SqlDatabasesDeleteRequest {
    public SqlDatabasesDeletePathParams pathParams;
    public SqlDatabasesDeleteRequest withPathParams(SqlDatabasesDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlDatabasesDeleteQueryParams queryParams;
    public SqlDatabasesDeleteRequest withQueryParams(SqlDatabasesDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SqlDatabasesDeleteSecurity security;
    public SqlDatabasesDeleteRequest withSecurity(SqlDatabasesDeleteSecurity security) {
        this.security = security;
        return this;
    }
}