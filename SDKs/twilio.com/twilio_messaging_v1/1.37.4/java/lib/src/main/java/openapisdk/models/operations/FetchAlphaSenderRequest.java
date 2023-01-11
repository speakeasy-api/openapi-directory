package openapisdk.models.operations;



public class FetchAlphaSenderRequest {
    public String serverURL;
    public FetchAlphaSenderRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchAlphaSenderPathParams pathParams;
    public FetchAlphaSenderRequest withPathParams(FetchAlphaSenderPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchAlphaSenderSecurity security;
    public FetchAlphaSenderRequest withSecurity(FetchAlphaSenderSecurity security) {
        this.security = security;
        return this;
    }
}