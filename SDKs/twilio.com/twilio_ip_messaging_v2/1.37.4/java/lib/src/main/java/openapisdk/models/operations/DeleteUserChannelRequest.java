package openapisdk.models.operations;



public class DeleteUserChannelRequest {
    public String serverURL;
    public DeleteUserChannelRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteUserChannelPathParams pathParams;
    public DeleteUserChannelRequest withPathParams(DeleteUserChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteUserChannelSecurity security;
    public DeleteUserChannelRequest withSecurity(DeleteUserChannelSecurity security) {
        this.security = security;
        return this;
    }
}