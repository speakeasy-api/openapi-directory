package openapisdk.models.operations;



public class DeleteCompositionHookRequest {
    public String serverURL;
    public DeleteCompositionHookRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteCompositionHookPathParams pathParams;
    public DeleteCompositionHookRequest withPathParams(DeleteCompositionHookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteCompositionHookSecurity security;
    public DeleteCompositionHookRequest withSecurity(DeleteCompositionHookSecurity security) {
        this.security = security;
        return this;
    }
}