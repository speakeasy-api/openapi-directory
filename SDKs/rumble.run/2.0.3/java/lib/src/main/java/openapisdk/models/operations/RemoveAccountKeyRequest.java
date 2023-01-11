package openapisdk.models.operations;



public class RemoveAccountKeyRequest {
    public RemoveAccountKeyPathParams pathParams;
    public RemoveAccountKeyRequest withPathParams(RemoveAccountKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemoveAccountKeySecurity security;
    public RemoveAccountKeyRequest withSecurity(RemoveAccountKeySecurity security) {
        this.security = security;
        return this;
    }
}