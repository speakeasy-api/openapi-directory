package openapisdk.models.operations;



public class DeleteWebChannelRequest {
    public String serverURL;
    public DeleteWebChannelRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteWebChannelPathParams pathParams;
    public DeleteWebChannelRequest withPathParams(DeleteWebChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteWebChannelSecurity security;
    public DeleteWebChannelRequest withSecurity(DeleteWebChannelSecurity security) {
        this.security = security;
        return this;
    }
}