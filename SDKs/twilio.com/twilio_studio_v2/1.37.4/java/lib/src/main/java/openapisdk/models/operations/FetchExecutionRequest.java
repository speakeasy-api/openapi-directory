package openapisdk.models.operations;



public class FetchExecutionRequest {
    public String serverURL;
    public FetchExecutionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchExecutionPathParams pathParams;
    public FetchExecutionRequest withPathParams(FetchExecutionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchExecutionSecurity security;
    public FetchExecutionRequest withSecurity(FetchExecutionSecurity security) {
        this.security = security;
        return this;
    }
}