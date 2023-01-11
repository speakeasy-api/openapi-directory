package openapisdk.models.operations;



public class SqlInstancesAddServerCaRequest {
    public SqlInstancesAddServerCaPathParams pathParams;
    public SqlInstancesAddServerCaRequest withPathParams(SqlInstancesAddServerCaPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlInstancesAddServerCaQueryParams queryParams;
    public SqlInstancesAddServerCaRequest withQueryParams(SqlInstancesAddServerCaQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SqlInstancesAddServerCaSecurity security;
    public SqlInstancesAddServerCaRequest withSecurity(SqlInstancesAddServerCaSecurity security) {
        this.security = security;
        return this;
    }
}