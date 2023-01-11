package openapisdk.models.operations;



public class FetchCallRequest {
    public String serverURL;
    public FetchCallRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchCallPathParams pathParams;
    public FetchCallRequest withPathParams(FetchCallPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchCallSecurity security;
    public FetchCallRequest withSecurity(FetchCallSecurity security) {
        this.security = security;
        return this;
    }
}