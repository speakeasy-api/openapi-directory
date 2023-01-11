package openapisdk.models.operations;



public class SqlSslCertsListRequest {
    public SqlSslCertsListPathParams pathParams;
    public SqlSslCertsListRequest withPathParams(SqlSslCertsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlSslCertsListQueryParams queryParams;
    public SqlSslCertsListRequest withQueryParams(SqlSslCertsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SqlSslCertsListSecurity security;
    public SqlSslCertsListRequest withSecurity(SqlSslCertsListSecurity security) {
        this.security = security;
        return this;
    }
}