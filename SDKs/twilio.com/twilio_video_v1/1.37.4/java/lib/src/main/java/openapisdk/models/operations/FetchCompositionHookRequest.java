package openapisdk.models.operations;



public class FetchCompositionHookRequest {
    public String serverURL;
    public FetchCompositionHookRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchCompositionHookPathParams pathParams;
    public FetchCompositionHookRequest withPathParams(FetchCompositionHookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchCompositionHookSecurity security;
    public FetchCompositionHookRequest withSecurity(FetchCompositionHookSecurity security) {
        this.security = security;
        return this;
    }
}