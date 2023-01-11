package openapisdk.models.operations;



public class DeleteBindingRequest {
    public String serverURL;
    public DeleteBindingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteBindingPathParams pathParams;
    public DeleteBindingRequest withPathParams(DeleteBindingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteBindingSecurity security;
    public DeleteBindingRequest withSecurity(DeleteBindingSecurity security) {
        this.security = security;
        return this;
    }
}