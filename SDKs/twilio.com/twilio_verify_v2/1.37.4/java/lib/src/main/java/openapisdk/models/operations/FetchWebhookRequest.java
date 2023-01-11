package openapisdk.models.operations;



public class FetchWebhookRequest {
    public String serverURL;
    public FetchWebhookRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchWebhookPathParams pathParams;
    public FetchWebhookRequest withPathParams(FetchWebhookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchWebhookSecurity security;
    public FetchWebhookRequest withSecurity(FetchWebhookSecurity security) {
        this.security = security;
        return this;
    }
}