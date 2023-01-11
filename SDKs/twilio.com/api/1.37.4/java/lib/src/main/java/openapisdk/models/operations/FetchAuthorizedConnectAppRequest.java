package openapisdk.models.operations;



public class FetchAuthorizedConnectAppRequest {
    public String serverURL;
    public FetchAuthorizedConnectAppRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchAuthorizedConnectAppPathParams pathParams;
    public FetchAuthorizedConnectAppRequest withPathParams(FetchAuthorizedConnectAppPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchAuthorizedConnectAppSecurity security;
    public FetchAuthorizedConnectAppRequest withSecurity(FetchAuthorizedConnectAppSecurity security) {
        this.security = security;
        return this;
    }
}