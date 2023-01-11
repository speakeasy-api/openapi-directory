package openapisdk.models.operations;



public class DeleteChannelRequest {
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