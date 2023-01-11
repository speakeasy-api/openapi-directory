package openapisdk.models.operations;



public class GetAccountCredentialRequest {
    public GetAccountCredentialPathParams pathParams;
    public GetAccountCredentialRequest withPathParams(GetAccountCredentialPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAccountCredentialSecurity security;
    public GetAccountCredentialRequest withSecurity(GetAccountCredentialSecurity security) {
        this.security = security;
        return this;
    }
}