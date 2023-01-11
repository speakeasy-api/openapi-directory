package openapisdk.models.operations;



public class DeleteContentRequest {
    public String serverURL;
    public DeleteContentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteContentPathParams pathParams;
    public DeleteContentRequest withPathParams(DeleteContentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteContentSecurity security;
    public DeleteContentRequest withSecurity(DeleteContentSecurity security) {
        this.security = security;
        return this;
    }
}