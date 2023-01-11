package openapisdk.models.operations;



public class DeleteTaskChannelRequest {
    public String serverURL;
    public DeleteTaskChannelRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteTaskChannelPathParams pathParams;
    public DeleteTaskChannelRequest withPathParams(DeleteTaskChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteTaskChannelSecurity security;
    public DeleteTaskChannelRequest withSecurity(DeleteTaskChannelSecurity security) {
        this.security = security;
        return this;
    }
}