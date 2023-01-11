package openapisdk.models.operations;



public class GetAccountKeyRequest {
    public GetAccountKeyPathParams pathParams;
    public GetAccountKeyRequest withPathParams(GetAccountKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAccountKeySecurity security;
    public GetAccountKeyRequest withSecurity(GetAccountKeySecurity security) {
        this.security = security;
        return this;
    }
}