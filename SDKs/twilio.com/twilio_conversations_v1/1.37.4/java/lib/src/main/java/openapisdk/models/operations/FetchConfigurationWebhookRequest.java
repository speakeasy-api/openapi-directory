package openapisdk.models.operations;



public class FetchConfigurationWebhookRequest {
    public String serverURL;
    public FetchConfigurationWebhookRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchConfigurationWebhookSecurity security;
    public FetchConfigurationWebhookRequest withSecurity(FetchConfigurationWebhookSecurity security) {
        this.security = security;
        return this;
    }
}