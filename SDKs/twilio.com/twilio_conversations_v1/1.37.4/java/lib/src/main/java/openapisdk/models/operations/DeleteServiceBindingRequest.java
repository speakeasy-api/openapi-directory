package openapisdk.models.operations;



public class DeleteServiceBindingRequest {
    public String serverURL;
    public DeleteServiceBindingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteServiceBindingPathParams pathParams;
    public DeleteServiceBindingRequest withPathParams(DeleteServiceBindingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteServiceBindingSecurity security;
    public DeleteServiceBindingRequest withSecurity(DeleteServiceBindingSecurity security) {
        this.security = security;
        return this;
    }
}