package openapisdk.models.operations;



public class DeleteUserRequest {
    public DeleteUserPathParams pathParams;
    public DeleteUserRequest withPathParams(DeleteUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteUserSecurity security;
    public DeleteUserRequest withSecurity(DeleteUserSecurity security) {
        this.security = security;
        return this;
    }
}