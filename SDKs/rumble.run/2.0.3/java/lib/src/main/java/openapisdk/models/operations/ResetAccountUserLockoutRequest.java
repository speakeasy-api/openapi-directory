package openapisdk.models.operations;



public class ResetAccountUserLockoutRequest {
    public ResetAccountUserLockoutPathParams pathParams;
    public ResetAccountUserLockoutRequest withPathParams(ResetAccountUserLockoutPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ResetAccountUserLockoutSecurity security;
    public ResetAccountUserLockoutRequest withSecurity(ResetAccountUserLockoutSecurity security) {
        this.security = security;
        return this;
    }
}