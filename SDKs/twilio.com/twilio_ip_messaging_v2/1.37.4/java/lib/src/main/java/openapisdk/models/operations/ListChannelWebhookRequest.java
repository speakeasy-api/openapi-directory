package openapisdk.models.operations;



public class ListChannelWebhookRequest {
    public String serverURL;
    public ListChannelWebhookRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListChannelWebhookPathParams pathParams;
    public ListChannelWebhookRequest withPathParams(ListChannelWebhookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListChannelWebhookQueryParams queryParams;
    public ListChannelWebhookRequest withQueryParams(ListChannelWebhookQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListChannelWebhookSecurity security;
    public ListChannelWebhookRequest withSecurity(ListChannelWebhookSecurity security) {
        this.security = security;
        return this;
    }
}