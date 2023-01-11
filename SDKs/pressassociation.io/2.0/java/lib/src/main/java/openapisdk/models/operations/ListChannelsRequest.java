package openapisdk.models.operations;



public class ListChannelsRequest {
    public ListChannelsQueryParams queryParams;
    public ListChannelsRequest withQueryParams(ListChannelsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListChannelsSecurity security;
    public ListChannelsRequest withSecurity(ListChannelsSecurity security) {
        this.security = security;
        return this;
    }
}