package openapisdk.models.operations;



public class SqlDatabasesListRequest {
    public SqlDatabasesListPathParams pathParams;
    public SqlDatabasesListRequest withPathParams(SqlDatabasesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlDatabasesListQueryParams queryParams;
    public SqlDatabasesListRequest withQueryParams(SqlDatabasesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SqlDatabasesListSecurity security;
    public SqlDatabasesListRequest withSecurity(SqlDatabasesListSecurity security) {
        this.security = security;
        return this;
    }
}