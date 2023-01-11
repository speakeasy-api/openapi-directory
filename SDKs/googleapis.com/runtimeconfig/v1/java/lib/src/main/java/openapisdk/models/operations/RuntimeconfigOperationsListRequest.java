package openapisdk.models.operations;



public class RuntimeconfigOperationsListRequest {
    public RuntimeconfigOperationsListPathParams pathParams;
    public RuntimeconfigOperationsListRequest withPathParams(RuntimeconfigOperationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RuntimeconfigOperationsListQueryParams queryParams;
    public RuntimeconfigOperationsListRequest withQueryParams(RuntimeconfigOperationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public RuntimeconfigOperationsListSecurity security;
    public RuntimeconfigOperationsListRequest withSecurity(RuntimeconfigOperationsListSecurity security) {
        this.security = security;
        return this;
    }
}