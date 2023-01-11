package openapisdk.models.operations;



public class FetchInteractionChannelRequest {
    public String serverURL;
    public FetchInteractionChannelRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchInteractionChannelPathParams pathParams;
    public FetchInteractionChannelRequest withPathParams(FetchInteractionChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchInteractionChannelSecurity security;
    public FetchInteractionChannelRequest withSecurity(FetchInteractionChannelSecurity security) {
        this.security = security;
        return this;
    }
}