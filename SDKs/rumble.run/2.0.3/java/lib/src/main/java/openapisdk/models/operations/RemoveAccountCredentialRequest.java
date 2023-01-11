package openapisdk.models.operations;



public class RemoveAccountCredentialRequest {
    public RemoveAccountCredentialPathParams pathParams;
    public RemoveAccountCredentialRequest withPathParams(RemoveAccountCredentialPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemoveAccountCredentialSecurity security;
    public RemoveAccountCredentialRequest withSecurity(RemoveAccountCredentialSecurity security) {
        this.security = security;
        return this;
    }
}