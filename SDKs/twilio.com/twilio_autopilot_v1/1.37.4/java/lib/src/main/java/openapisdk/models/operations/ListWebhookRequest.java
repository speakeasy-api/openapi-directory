package openapisdk.models.operations;



public class ListWebhookRequest {
    public String serverURL;
    public ListWebhookRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListWebhookPathParams pathParams;
    public ListWebhookRequest withPathParams(ListWebhookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListWebhookQueryParams queryParams;
    public ListWebhookRequest withQueryParams(ListWebhookQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListWebhookSecurity security;
    public ListWebhookRequest withSecurity(ListWebhookSecurity security) {
        this.security = security;
        return this;
    }
}