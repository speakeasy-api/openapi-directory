package openapisdk.models.operations;



public class DeleteApiKeyRequest {
    public DeleteApiKeyPathParams pathParams;
    public DeleteApiKeyRequest withPathParams(DeleteApiKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteApiKeySecurity security;
    public DeleteApiKeyRequest withSecurity(DeleteApiKeySecurity security) {
        this.security = security;
        return this;
    }
}