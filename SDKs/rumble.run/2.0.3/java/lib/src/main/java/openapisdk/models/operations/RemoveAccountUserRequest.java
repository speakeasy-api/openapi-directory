package openapisdk.models.operations;



public class RemoveAccountUserRequest {
    public RemoveAccountUserPathParams pathParams;
    public RemoveAccountUserRequest withPathParams(RemoveAccountUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemoveAccountUserSecurity security;
    public RemoveAccountUserRequest withSecurity(RemoveAccountUserSecurity security) {
        this.security = security;
        return this;
    }
}