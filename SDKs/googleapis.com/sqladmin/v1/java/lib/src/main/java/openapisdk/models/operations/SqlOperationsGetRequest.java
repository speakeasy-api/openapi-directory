package openapisdk.models.operations;



public class SqlOperationsGetRequest {
    public SqlOperationsGetPathParams pathParams;
    public SqlOperationsGetRequest withPathParams(SqlOperationsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlOperationsGetQueryParams queryParams;
    public SqlOperationsGetRequest withQueryParams(SqlOperationsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SqlOperationsGetSecurity security;
    public SqlOperationsGetRequest withSecurity(SqlOperationsGetSecurity security) {
        this.security = security;
        return this;
    }
}