package openapisdk.models.operations;



public class GetProductModuleRequest {
    public GetProductModulePathParams pathParams;
    public GetProductModuleRequest withPathParams(GetProductModulePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetProductModuleSecurity security;
    public GetProductModuleRequest withSecurity(GetProductModuleSecurity security) {
        this.security = security;
        return this;
    }
}