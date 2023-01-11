package openapisdk.models.operations;



public class FetchStepRequest {
    public String serverURL;
    public FetchStepRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchStepPathParams pathParams;
    public FetchStepRequest withPathParams(FetchStepPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchStepSecurity security;
    public FetchStepRequest withSecurity(FetchStepSecurity security) {
        this.security = security;
        return this;
    }
}