package openapisdk.models.operations;



public class UpdateServiceWebhookConfigurationResponse {
    public String contentType;
    public UpdateServiceWebhookConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateServiceWebhookConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration conversationsV1ServiceServiceConfigurationServiceWebhookConfiguration;
    public UpdateServiceWebhookConfigurationResponse withConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration(openapisdk.models.shared.ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration conversationsV1ServiceServiceConfigurationServiceWebhookConfiguration) {
        this.conversationsV1ServiceServiceConfigurationServiceWebhookConfiguration = conversationsV1ServiceServiceConfigurationServiceWebhookConfiguration;
        return this;
    }
}