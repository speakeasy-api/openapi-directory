package openapisdk.models.operations;



public class FetchApplicationRequest {
    public String serverURL;
    public FetchApplicationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchApplicationPathParams pathParams;
    public FetchApplicationRequest withPathParams(FetchApplicationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchApplicationSecurity security;
    public FetchApplicationRequest withSecurity(FetchApplicationSecurity security) {
        this.security = security;
        return this;
    }
}