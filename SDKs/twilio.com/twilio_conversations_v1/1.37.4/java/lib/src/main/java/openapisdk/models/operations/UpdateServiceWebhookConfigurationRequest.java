package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceWebhookConfigurationRequest {
    public String serverURL;
    public UpdateServiceWebhookConfigurationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateServiceWebhookConfigurationPathParams pathParams;
    public UpdateServiceWebhookConfigurationRequest withPathParams(UpdateServiceWebhookConfigurationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateServiceWebhookConfigurationUpdateServiceWebhookConfigurationRequest request;
    public UpdateServiceWebhookConfigurationRequest withRequest(UpdateServiceWebhookConfigurationUpdateServiceWebhookConfigurationRequest request) {
        this.request = request;
        return this;
    }
    public UpdateServiceWebhookConfigurationSecurity security;
    public UpdateServiceWebhookConfigurationRequest withSecurity(UpdateServiceWebhookConfigurationSecurity security) {
        this.security = security;
        return this;
    }
}