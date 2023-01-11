package openapisdk.models.operations;



public class FetchExecutionStepRequest {
    public String serverURL;
    public FetchExecutionStepRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchExecutionStepPathParams pathParams;
    public FetchExecutionStepRequest withPathParams(FetchExecutionStepPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchExecutionStepSecurity security;
    public FetchExecutionStepRequest withSecurity(FetchExecutionStepSecurity security) {
        this.security = security;
        return this;
    }
}