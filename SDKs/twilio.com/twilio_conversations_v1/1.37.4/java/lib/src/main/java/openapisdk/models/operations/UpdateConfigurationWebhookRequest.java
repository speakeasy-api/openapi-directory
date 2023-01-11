package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConfigurationWebhookRequest {
    public String serverURL;
    public UpdateConfigurationWebhookRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateConfigurationWebhookUpdateConfigurationWebhookRequest request;
    public UpdateConfigurationWebhookRequest withRequest(UpdateConfigurationWebhookUpdateConfigurationWebhookRequest request) {
        this.request = request;
        return this;
    }
    public UpdateConfigurationWebhookSecurity security;
    public UpdateConfigurationWebhookRequest withSecurity(UpdateConfigurationWebhookSecurity security) {
        this.security = security;
        return this;
    }
}