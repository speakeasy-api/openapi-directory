package openapisdk.models.operations;



public class SqlSslCertsGetRequest {
    public SqlSslCertsGetPathParams pathParams;
    public SqlSslCertsGetRequest withPathParams(SqlSslCertsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlSslCertsGetQueryParams queryParams;
    public SqlSslCertsGetRequest withQueryParams(SqlSslCertsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SqlSslCertsGetSecurity security;
    public SqlSslCertsGetRequest withSecurity(SqlSslCertsGetSecurity security) {
        this.security = security;
        return this;
    }
}