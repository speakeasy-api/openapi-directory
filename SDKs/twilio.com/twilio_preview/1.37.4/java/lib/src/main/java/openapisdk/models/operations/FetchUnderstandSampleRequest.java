package openapisdk.models.operations;



public class FetchUnderstandSampleRequest {
    public String serverURL;
    public FetchUnderstandSampleRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchUnderstandSamplePathParams pathParams;
    public FetchUnderstandSampleRequest withPathParams(FetchUnderstandSamplePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchUnderstandSampleSecurity security;
    public FetchUnderstandSampleRequest withSecurity(FetchUnderstandSampleSecurity security) {
        this.security = security;
        return this;
    }
}