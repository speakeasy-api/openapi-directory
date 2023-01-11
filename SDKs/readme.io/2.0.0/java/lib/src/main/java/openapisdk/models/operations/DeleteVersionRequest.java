package openapisdk.models.operations;



public class DeleteVersionRequest {
    public DeleteVersionPathParams pathParams;
    public DeleteVersionRequest withPathParams(DeleteVersionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteVersionSecurity security;
    public DeleteVersionRequest withSecurity(DeleteVersionSecurity security) {
        this.security = security;
        return this;
    }
}