package openapisdk.models.operations;



public class AddChannelTagRequest {
    public AddChannelTagPathParams pathParams;
    public AddChannelTagRequest withPathParams(AddChannelTagPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddChannelTagSecurity security;
    public AddChannelTagRequest withSecurity(AddChannelTagSecurity security) {
        this.security = security;
        return this;
    }
}