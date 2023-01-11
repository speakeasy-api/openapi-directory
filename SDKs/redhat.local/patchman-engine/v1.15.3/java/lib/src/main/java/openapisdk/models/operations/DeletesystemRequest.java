package openapisdk.models.operations;



public class DeletesystemRequest {
    public DeletesystemPathParams pathParams;
    public DeletesystemRequest withPathParams(DeletesystemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeletesystemSecurity security;
    public DeletesystemRequest withSecurity(DeletesystemSecurity security) {
        this.security = security;
        return this;
    }
}