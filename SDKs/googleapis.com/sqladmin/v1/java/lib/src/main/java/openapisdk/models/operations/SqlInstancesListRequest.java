package openapisdk.models.operations;



public class SqlInstancesListRequest {
    public SqlInstancesListPathParams pathParams;
    public SqlInstancesListRequest withPathParams(SqlInstancesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlInstancesListQueryParams queryParams;
    public SqlInstancesListRequest withQueryParams(SqlInstancesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SqlInstancesListSecurity security;
    public SqlInstancesListRequest withSecurity(SqlInstancesListSecurity security) {
        this.security = security;
        return this;
    }
}