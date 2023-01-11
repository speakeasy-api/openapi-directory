package openapisdk.models.operations;



public class FetchSessionRequest {
    public String serverURL;
    public FetchSessionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSessionPathParams pathParams;
    public FetchSessionRequest withPathParams(FetchSessionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSessionSecurity security;
    public FetchSessionRequest withSecurity(FetchSessionSecurity security) {
        this.security = security;
        return this;
    }
}