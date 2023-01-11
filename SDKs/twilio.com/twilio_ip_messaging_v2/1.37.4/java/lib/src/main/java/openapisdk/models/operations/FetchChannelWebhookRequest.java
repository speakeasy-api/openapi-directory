package openapisdk.models.operations;



public class FetchChannelWebhookRequest {
    public String serverURL;
    public FetchChannelWebhookRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchChannelWebhookPathParams pathParams;
    public FetchChannelWebhookRequest withPathParams(FetchChannelWebhookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchChannelWebhookSecurity security;
    public FetchChannelWebhookRequest withSecurity(FetchChannelWebhookSecurity security) {
        this.security = security;
        return this;
    }
}