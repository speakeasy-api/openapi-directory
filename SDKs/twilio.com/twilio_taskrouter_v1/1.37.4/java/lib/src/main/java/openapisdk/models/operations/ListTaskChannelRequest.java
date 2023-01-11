package openapisdk.models.operations;



public class ListTaskChannelRequest {
    public String serverURL;
    public ListTaskChannelRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListTaskChannelPathParams pathParams;
    public ListTaskChannelRequest withPathParams(ListTaskChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListTaskChannelQueryParams queryParams;
    public ListTaskChannelRequest withQueryParams(ListTaskChannelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTaskChannelSecurity security;
    public ListTaskChannelRequest withSecurity(ListTaskChannelSecurity security) {
        this.security = security;
        return this;
    }
}