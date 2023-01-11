package openapisdk.models.operations;



public class WebhooksFetchAllRequest {
    public WebhooksFetchAllPathParams pathParams;
    public WebhooksFetchAllRequest withPathParams(WebhooksFetchAllPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WebhooksFetchAllSecurity security;
    public WebhooksFetchAllRequest withSecurity(WebhooksFetchAllSecurity security) {
        this.security = security;
        return this;
    }
}