package openapisdk.models.operations;



public class DeleteChannelWebhookRequest {
    public String serverURL;
    public DeleteChannelWebhookRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteChannelWebhookPathParams pathParams;
    public DeleteChannelWebhookRequest withPathParams(DeleteChannelWebhookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteChannelWebhookSecurity security;
    public DeleteChannelWebhookRequest withSecurity(DeleteChannelWebhookSecurity security) {
        this.security = security;
        return this;
    }
}