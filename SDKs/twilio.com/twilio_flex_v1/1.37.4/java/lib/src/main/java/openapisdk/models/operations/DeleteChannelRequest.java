package openapisdk.models.operations;



public class DeleteChannelRequest {
    public String serverURL;
    public DeleteChannelRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteChannelPathParams pathParams;
    public DeleteChannelRequest withPathParams(DeleteChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteChannelSecurity security;
    public DeleteChannelRequest withSecurity(DeleteChannelSecurity security) {
        this.security = security;
        return this;
    }
}