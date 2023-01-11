package openapisdk.models.operations;



public class SqlOperationsListRequest {
    public SqlOperationsListPathParams pathParams;
    public SqlOperationsListRequest withPathParams(SqlOperationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlOperationsListQueryParams queryParams;
    public SqlOperationsListRequest withQueryParams(SqlOperationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SqlOperationsListSecurity security;
    public SqlOperationsListRequest withSecurity(SqlOperationsListSecurity security) {
        this.security = security;
        return this;
    }
}