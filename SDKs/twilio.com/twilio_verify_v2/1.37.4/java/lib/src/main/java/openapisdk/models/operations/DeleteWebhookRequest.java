package openapisdk.models.operations;



public class DeleteWebhookRequest {
    public String serverURL;
    public DeleteWebhookRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteWebhookPathParams pathParams;
    public DeleteWebhookRequest withPathParams(DeleteWebhookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteWebhookSecurity security;
    public DeleteWebhookRequest withSecurity(DeleteWebhookSecurity security) {
        this.security = security;
        return this;
    }
}