package openapisdk.models.operations;



public class FetchSinkRequest {
    public String serverURL;
    public FetchSinkRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSinkPathParams pathParams;
    public FetchSinkRequest withPathParams(FetchSinkPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSinkSecurity security;
    public FetchSinkRequest withSecurity(FetchSinkSecurity security) {
        this.security = security;
        return this;
    }
}