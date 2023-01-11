package openapisdk.models.operations;



public class FetchSampleRequest {
    public String serverURL;
    public FetchSampleRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSamplePathParams pathParams;
    public FetchSampleRequest withPathParams(FetchSamplePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSampleSecurity security;
    public FetchSampleRequest withSecurity(FetchSampleSecurity security) {
        this.security = security;
        return this;
    }
}