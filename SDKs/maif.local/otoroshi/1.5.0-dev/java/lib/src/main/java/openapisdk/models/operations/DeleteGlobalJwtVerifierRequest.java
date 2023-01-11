package openapisdk.models.operations;



public class DeleteGlobalJwtVerifierRequest {
    public DeleteGlobalJwtVerifierPathParams pathParams;
    public DeleteGlobalJwtVerifierRequest withPathParams(DeleteGlobalJwtVerifierPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteGlobalJwtVerifierSecurity security;
    public DeleteGlobalJwtVerifierRequest withSecurity(DeleteGlobalJwtVerifierSecurity security) {
        this.security = security;
        return this;
    }
}