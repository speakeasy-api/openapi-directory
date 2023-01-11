package openapisdk.models.operations;



public class FetchShortCodeRequest {
    public String serverURL;
    public FetchShortCodeRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchShortCodePathParams pathParams;
    public FetchShortCodeRequest withPathParams(FetchShortCodePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchShortCodeSecurity security;
    public FetchShortCodeRequest withSecurity(FetchShortCodeSecurity security) {
        this.security = security;
        return this;
    }
}