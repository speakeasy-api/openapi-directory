package openapisdk.models.operations;



public class FetchWebChannelRequest {
    public String serverURL;
    public FetchWebChannelRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchWebChannelPathParams pathParams;
    public FetchWebChannelRequest withPathParams(FetchWebChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchWebChannelSecurity security;
    public FetchWebChannelRequest withSecurity(FetchWebChannelSecurity security) {
        this.security = security;
        return this;
    }
}