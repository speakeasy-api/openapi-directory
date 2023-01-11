package openapisdk.models.operations;



public class AddVideoToChannelRequest {
    public AddVideoToChannelPathParams pathParams;
    public AddVideoToChannelRequest withPathParams(AddVideoToChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddVideoToChannelSecurity security;
    public AddVideoToChannelRequest withSecurity(AddVideoToChannelSecurity security) {
        this.security = security;
        return this;
    }
}