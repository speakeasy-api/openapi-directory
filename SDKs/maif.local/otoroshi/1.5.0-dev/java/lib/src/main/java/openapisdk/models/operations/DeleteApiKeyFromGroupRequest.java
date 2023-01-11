package openapisdk.models.operations;



public class DeleteApiKeyFromGroupRequest {
    public DeleteApiKeyFromGroupPathParams pathParams;
    public DeleteApiKeyFromGroupRequest withPathParams(DeleteApiKeyFromGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteApiKeyFromGroupSecurity security;
    public DeleteApiKeyFromGroupRequest withSecurity(DeleteApiKeyFromGroupSecurity security) {
        this.security = security;
        return this;
    }
}