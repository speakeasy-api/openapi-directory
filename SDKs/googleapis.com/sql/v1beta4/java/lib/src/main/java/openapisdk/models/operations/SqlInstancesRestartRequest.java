package openapisdk.models.operations;



public class SqlInstancesRestartRequest {
    public SqlInstancesRestartPathParams pathParams;
    public SqlInstancesRestartRequest withPathParams(SqlInstancesRestartPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlInstancesRestartQueryParams queryParams;
    public SqlInstancesRestartRequest withQueryParams(SqlInstancesRestartQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SqlInstancesRestartSecurity security;
    public SqlInstancesRestartRequest withSecurity(SqlInstancesRestartSecurity security) {
        this.security = security;
        return this;
    }
}