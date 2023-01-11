package openapisdk.models.operations;



public class DeleteServiceUserRequest {
    public String serverURL;
    public DeleteServiceUserRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteServiceUserPathParams pathParams;
    public DeleteServiceUserRequest withPathParams(DeleteServiceUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteServiceUserHeaders headers;
    public DeleteServiceUserRequest withHeaders(DeleteServiceUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    public DeleteServiceUserSecurity security;
    public DeleteServiceUserRequest withSecurity(DeleteServiceUserSecurity security) {
        this.security = security;
        return this;
    }
}