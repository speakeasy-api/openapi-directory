package openapisdk.models.operations;



public class FetchServiceWebhookConfigurationRequest {
    public String serverURL;
    public FetchServiceWebhookConfigurationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchServiceWebhookConfigurationPathParams pathParams;
    public FetchServiceWebhookConfigurationRequest withPathParams(FetchServiceWebhookConfigurationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchServiceWebhookConfigurationSecurity security;
    public FetchServiceWebhookConfigurationRequest withSecurity(FetchServiceWebhookConfigurationSecurity security) {
        this.security = security;
        return this;
    }
}