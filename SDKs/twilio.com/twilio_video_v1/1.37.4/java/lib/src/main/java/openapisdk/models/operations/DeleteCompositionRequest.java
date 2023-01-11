package openapisdk.models.operations;



public class DeleteCompositionRequest {
    public String serverURL;
    public DeleteCompositionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteCompositionPathParams pathParams;
    public DeleteCompositionRequest withPathParams(DeleteCompositionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteCompositionSecurity security;
    public DeleteCompositionRequest withSecurity(DeleteCompositionSecurity security) {
        this.security = security;
        return this;
    }
}