package openapisdk.models.operations;



public class SqlDatabasesGetRequest {
    public SqlDatabasesGetPathParams pathParams;
    public SqlDatabasesGetRequest withPathParams(SqlDatabasesGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlDatabasesGetQueryParams queryParams;
    public SqlDatabasesGetRequest withQueryParams(SqlDatabasesGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SqlDatabasesGetSecurity security;
    public SqlDatabasesGetRequest withSecurity(SqlDatabasesGetSecurity security) {
        this.security = security;
        return this;
    }
}