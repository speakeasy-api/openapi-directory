package openapisdk.models.operations;



public class DeleteUserRequest {
    public String serverURL;
    public DeleteUserRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteUserPathParams pathParams;
    public DeleteUserRequest withPathParams(DeleteUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteUserHeaders headers;
    public DeleteUserRequest withHeaders(DeleteUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    public DeleteUserSecurity security;
    public DeleteUserRequest withSecurity(DeleteUserSecurity security) {
        this.security = security;
        return this;
    }
}