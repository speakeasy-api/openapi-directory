package openapisdk.models.operations;



public class FetchTaskChannelRequest {
    public String serverURL;
    public FetchTaskChannelRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchTaskChannelPathParams pathParams;
    public FetchTaskChannelRequest withPathParams(FetchTaskChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchTaskChannelSecurity security;
    public FetchTaskChannelRequest withSecurity(FetchTaskChannelSecurity security) {
        this.security = security;
        return this;
    }
}