package openapisdk.models.operations;



public class SqlInstancesDeleteRequest {
    public SqlInstancesDeletePathParams pathParams;
    public SqlInstancesDeleteRequest withPathParams(SqlInstancesDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlInstancesDeleteQueryParams queryParams;
    public SqlInstancesDeleteRequest withQueryParams(SqlInstancesDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SqlInstancesDeleteSecurity security;
    public SqlInstancesDeleteRequest withSecurity(SqlInstancesDeleteSecurity security) {
        this.security = security;
        return this;
    }
}