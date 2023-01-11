package openapisdk.models.operations;



public class DeleteCertRequest {
    public DeleteCertPathParams pathParams;
    public DeleteCertRequest withPathParams(DeleteCertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteCertSecurity security;
    public DeleteCertRequest withSecurity(DeleteCertSecurity security) {
        this.security = security;
        return this;
    }
}