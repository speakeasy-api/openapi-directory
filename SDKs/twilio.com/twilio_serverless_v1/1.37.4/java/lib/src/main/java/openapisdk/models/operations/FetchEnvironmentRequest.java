package openapisdk.models.operations;



public class FetchEnvironmentRequest {
    public String serverURL;
    public FetchEnvironmentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchEnvironmentPathParams pathParams;
    public FetchEnvironmentRequest withPathParams(FetchEnvironmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchEnvironmentSecurity security;
    public FetchEnvironmentRequest withSecurity(FetchEnvironmentSecurity security) {
        this.security = security;
        return this;
    }
}