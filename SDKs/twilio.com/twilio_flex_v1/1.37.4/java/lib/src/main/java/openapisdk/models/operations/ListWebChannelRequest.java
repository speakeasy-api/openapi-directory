package openapisdk.models.operations;



public class ListWebChannelRequest {
    public String serverURL;
    public ListWebChannelRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListWebChannelQueryParams queryParams;
    public ListWebChannelRequest withQueryParams(ListWebChannelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListWebChannelSecurity security;
    public ListWebChannelRequest withSecurity(ListWebChannelSecurity security) {
        this.security = security;
        return this;
    }
}