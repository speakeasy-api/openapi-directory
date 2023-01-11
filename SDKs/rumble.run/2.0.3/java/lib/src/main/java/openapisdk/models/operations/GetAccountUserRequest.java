package openapisdk.models.operations;



public class GetAccountUserRequest {
    public GetAccountUserPathParams pathParams;
    public GetAccountUserRequest withPathParams(GetAccountUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAccountUserSecurity security;
    public GetAccountUserRequest withSecurity(GetAccountUserSecurity security) {
        this.security = security;
        return this;
    }
}