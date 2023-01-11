package openapisdk.models.operations;



public class DeleteUserBindingRequest {
    public String serverURL;
    public DeleteUserBindingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteUserBindingPathParams pathParams;
    public DeleteUserBindingRequest withPathParams(DeleteUserBindingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteUserBindingSecurity security;
    public DeleteUserBindingRequest withSecurity(DeleteUserBindingSecurity security) {
        this.security = security;
        return this;
    }
}