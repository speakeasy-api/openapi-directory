package openapisdk.models.operations;



public class DeleteKeyRequest {
    public DeleteKeyPathParams pathParams;
    public DeleteKeyRequest withPathParams(DeleteKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteKeySecurity security;
    public DeleteKeyRequest withSecurity(DeleteKeySecurity security) {
        this.security = security;
        return this;
    }
}