package openapisdk.models.operations;



public class ListUserChannelRequest {
    public String serverURL;
    public ListUserChannelRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListUserChannelPathParams pathParams;
    public ListUserChannelRequest withPathParams(ListUserChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListUserChannelQueryParams queryParams;
    public ListUserChannelRequest withQueryParams(ListUserChannelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListUserChannelSecurity security;
    public ListUserChannelRequest withSecurity(ListUserChannelSecurity security) {
        this.security = security;
        return this;
    }
}