package openapisdk.models.operations;



public class SqlSslCertsDeleteRequest {
    public SqlSslCertsDeletePathParams pathParams;
    public SqlSslCertsDeleteRequest withPathParams(SqlSslCertsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlSslCertsDeleteQueryParams queryParams;
    public SqlSslCertsDeleteRequest withQueryParams(SqlSslCertsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SqlSslCertsDeleteSecurity security;
    public SqlSslCertsDeleteRequest withSecurity(SqlSslCertsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}