package openapisdk.models.operations;



public class DeleteEndUserRequest {
    public String serverURL;
    public DeleteEndUserRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteEndUserPathParams pathParams;
    public DeleteEndUserRequest withPathParams(DeleteEndUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteEndUserSecurity security;
    public DeleteEndUserRequest withSecurity(DeleteEndUserSecurity security) {
        this.security = security;
        return this;
    }
}