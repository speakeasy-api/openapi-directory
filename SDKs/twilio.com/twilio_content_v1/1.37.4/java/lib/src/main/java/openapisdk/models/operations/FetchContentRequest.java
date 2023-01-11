package openapisdk.models.operations;



public class FetchContentRequest {
    public String serverURL;
    public FetchContentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchContentPathParams pathParams;
    public FetchContentRequest withPathParams(FetchContentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchContentSecurity security;
    public FetchContentRequest withSecurity(FetchContentSecurity security) {
        this.security = security;
        return this;
    }
}