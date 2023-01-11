package openapisdk.models.operations;



public class WebhooksUnsubscribeRequest {
    public WebhooksUnsubscribePathParams pathParams;
    public WebhooksUnsubscribeRequest withPathParams(WebhooksUnsubscribePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WebhooksUnsubscribeSecurity security;
    public WebhooksUnsubscribeRequest withSecurity(WebhooksUnsubscribeSecurity security) {
        this.security = security;
        return this;
    }
}