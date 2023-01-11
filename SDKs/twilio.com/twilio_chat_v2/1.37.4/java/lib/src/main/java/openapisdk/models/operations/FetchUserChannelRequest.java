package openapisdk.models.operations;



public class FetchUserChannelRequest {
    public String serverURL;
    public FetchUserChannelRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchUserChannelPathParams pathParams;
    public FetchUserChannelRequest withPathParams(FetchUserChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchUserChannelSecurity security;
    public FetchUserChannelRequest withSecurity(FetchUserChannelSecurity security) {
        this.security = security;
        return this;
    }
}