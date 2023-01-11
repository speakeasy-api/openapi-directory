package openapisdk.models.operations;



public class CategorizeChannelRequest {
    public CategorizeChannelPathParams pathParams;
    public CategorizeChannelRequest withPathParams(CategorizeChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CategorizeChannelSecurity security;
    public CategorizeChannelRequest withSecurity(CategorizeChannelSecurity security) {
        this.security = security;
        return this;
    }
}