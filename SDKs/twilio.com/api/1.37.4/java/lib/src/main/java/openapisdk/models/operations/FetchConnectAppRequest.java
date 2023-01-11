package openapisdk.models.operations;



public class FetchConnectAppRequest {
    public String serverURL;
    public FetchConnectAppRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchConnectAppPathParams pathParams;
    public FetchConnectAppRequest withPathParams(FetchConnectAppPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchConnectAppSecurity security;
    public FetchConnectAppRequest withSecurity(FetchConnectAppSecurity security) {
        this.security = security;
        return this;
    }
}