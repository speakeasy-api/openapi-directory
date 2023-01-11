package openapisdk.models.operations;



public class DeleteGlobalAuthModuleRequest {
    public DeleteGlobalAuthModulePathParams pathParams;
    public DeleteGlobalAuthModuleRequest withPathParams(DeleteGlobalAuthModulePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteGlobalAuthModuleSecurity security;
    public DeleteGlobalAuthModuleRequest withSecurity(DeleteGlobalAuthModuleSecurity security) {
        this.security = security;
        return this;
    }
}