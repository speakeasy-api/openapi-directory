package openapisdk.models.operations;



public class FetchExecutionStepContextRequest {
    public String serverURL;
    public FetchExecutionStepContextRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchExecutionStepContextPathParams pathParams;
    public FetchExecutionStepContextRequest withPathParams(FetchExecutionStepContextPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchExecutionStepContextSecurity security;
    public FetchExecutionStepContextRequest withSecurity(FetchExecutionStepContextSecurity security) {
        this.security = security;
        return this;
    }
}