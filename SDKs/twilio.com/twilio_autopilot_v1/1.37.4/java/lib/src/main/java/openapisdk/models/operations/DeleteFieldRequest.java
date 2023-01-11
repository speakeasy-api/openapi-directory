package openapisdk.models.operations;



public class DeleteFieldRequest {
    public String serverURL;
    public DeleteFieldRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteFieldPathParams pathParams;
    public DeleteFieldRequest withPathParams(DeleteFieldPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteFieldSecurity security;
    public DeleteFieldRequest withSecurity(DeleteFieldSecurity security) {
        this.security = security;
        return this;
    }
}