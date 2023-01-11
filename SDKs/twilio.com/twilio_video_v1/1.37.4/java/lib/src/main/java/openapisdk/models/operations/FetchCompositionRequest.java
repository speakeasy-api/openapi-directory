package openapisdk.models.operations;



public class FetchCompositionRequest {
    public String serverURL;
    public FetchCompositionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchCompositionPathParams pathParams;
    public FetchCompositionRequest withPathParams(FetchCompositionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchCompositionSecurity security;
    public FetchCompositionRequest withSecurity(FetchCompositionSecurity security) {
        this.security = security;
        return this;
    }
}