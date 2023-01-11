package openapisdk.models.operations;



public class SqlInstancesListServerCasRequest {
    public SqlInstancesListServerCasPathParams pathParams;
    public SqlInstancesListServerCasRequest withPathParams(SqlInstancesListServerCasPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlInstancesListServerCasQueryParams queryParams;
    public SqlInstancesListServerCasRequest withQueryParams(SqlInstancesListServerCasQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SqlInstancesListServerCasSecurity security;
    public SqlInstancesListServerCasRequest withSecurity(SqlInstancesListServerCasSecurity security) {
        this.security = security;
        return this;
    }
}