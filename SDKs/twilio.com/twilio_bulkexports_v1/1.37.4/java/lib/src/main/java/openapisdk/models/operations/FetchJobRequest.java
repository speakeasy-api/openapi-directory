package openapisdk.models.operations;



public class FetchJobRequest {
    public String serverURL;
    public FetchJobRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchJobPathParams pathParams;
    public FetchJobRequest withPathParams(FetchJobPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchJobSecurity security;
    public FetchJobRequest withSecurity(FetchJobSecurity security) {
        this.security = security;
        return this;
    }
}