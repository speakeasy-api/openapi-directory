package openapisdk.models.operations;



public class DeleteApplicationRequest {
    public String serverURL;
    public DeleteApplicationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteApplicationPathParams pathParams;
    public DeleteApplicationRequest withPathParams(DeleteApplicationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteApplicationSecurity security;
    public DeleteApplicationRequest withSecurity(DeleteApplicationSecurity security) {
        this.security = security;
        return this;
    }
}