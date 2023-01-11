package openapisdk.models.operations;



public class FetchChannelRequest {
    public String serverURL;
    public FetchChannelRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchChannelPathParams pathParams;
    public FetchChannelRequest withPathParams(FetchChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchChannelSecurity security;
    public FetchChannelRequest withSecurity(FetchChannelSecurity security) {
        this.security = security;
        return this;
    }
}