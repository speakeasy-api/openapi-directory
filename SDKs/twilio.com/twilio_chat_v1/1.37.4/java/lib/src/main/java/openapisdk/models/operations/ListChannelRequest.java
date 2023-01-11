package openapisdk.models.operations;



public class ListChannelRequest {
    public String serverURL;
    public ListChannelRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListChannelPathParams pathParams;
    public ListChannelRequest withPathParams(ListChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListChannelQueryParams queryParams;
    public ListChannelRequest withQueryParams(ListChannelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListChannelSecurity security;
    public ListChannelRequest withSecurity(ListChannelSecurity security) {
        this.security = security;
        return this;
    }
}