package openapisdk.models.operations;



public class SqlConnectGetRequest {
    public SqlConnectGetPathParams pathParams;
    public SqlConnectGetRequest withPathParams(SqlConnectGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlConnectGetQueryParams queryParams;
    public SqlConnectGetRequest withQueryParams(SqlConnectGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SqlConnectGetSecurity security;
    public SqlConnectGetRequest withSecurity(SqlConnectGetSecurity security) {
        this.security = security;
        return this;
    }
}