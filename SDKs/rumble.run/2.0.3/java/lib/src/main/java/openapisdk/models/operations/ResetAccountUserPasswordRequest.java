package openapisdk.models.operations;



public class ResetAccountUserPasswordRequest {
    public ResetAccountUserPasswordPathParams pathParams;
    public ResetAccountUserPasswordRequest withPathParams(ResetAccountUserPasswordPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ResetAccountUserPasswordSecurity security;
    public ResetAccountUserPasswordRequest withSecurity(ResetAccountUserPasswordSecurity security) {
        this.security = security;
        return this;
    }
}