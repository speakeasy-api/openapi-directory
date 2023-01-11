package openapisdk.models.operations;



public class ListInteractionChannelRequest {
    public String serverURL;
    public ListInteractionChannelRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListInteractionChannelPathParams pathParams;
    public ListInteractionChannelRequest withPathParams(ListInteractionChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListInteractionChannelQueryParams queryParams;
    public ListInteractionChannelRequest withQueryParams(ListInteractionChannelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListInteractionChannelSecurity security;
    public ListInteractionChannelRequest withSecurity(ListInteractionChannelSecurity security) {
        this.security = security;
        return this;
    }
}