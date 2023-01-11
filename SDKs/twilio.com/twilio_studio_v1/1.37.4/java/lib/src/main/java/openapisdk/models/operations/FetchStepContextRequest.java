package openapisdk.models.operations;



public class FetchStepContextRequest {
    public String serverURL;
    public FetchStepContextRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchStepContextPathParams pathParams;
    public FetchStepContextRequest withPathParams(FetchStepContextPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchStepContextSecurity security;
    public FetchStepContextRequest withSecurity(FetchStepContextSecurity security) {
        this.security = security;
        return this;
    }
}