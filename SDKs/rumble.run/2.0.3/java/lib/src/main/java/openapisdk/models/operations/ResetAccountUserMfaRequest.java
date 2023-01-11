package openapisdk.models.operations;



public class ResetAccountUserMfaRequest {
    public ResetAccountUserMfaPathParams pathParams;
    public ResetAccountUserMfaRequest withPathParams(ResetAccountUserMfaPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ResetAccountUserMfaSecurity security;
    public ResetAccountUserMfaRequest withSecurity(ResetAccountUserMfaSecurity security) {
        this.security = security;
        return this;
    }
}