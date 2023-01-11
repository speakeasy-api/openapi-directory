package openapisdk.models.operations;



public class DeleteProductModuleRequest {
    public DeleteProductModulePathParams pathParams;
    public DeleteProductModuleRequest withPathParams(DeleteProductModulePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteProductModuleQueryParams queryParams;
    public DeleteProductModuleRequest withQueryParams(DeleteProductModuleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteProductModuleSecurity security;
    public DeleteProductModuleRequest withSecurity(DeleteProductModuleSecurity security) {
        this.security = security;
        return this;
    }
}