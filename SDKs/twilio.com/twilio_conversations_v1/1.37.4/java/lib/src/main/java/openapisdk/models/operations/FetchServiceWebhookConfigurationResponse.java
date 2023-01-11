package openapisdk.models.operations;



public class FetchServiceWebhookConfigurationResponse {
    public String contentType;
    public FetchServiceWebhookConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchServiceWebhookConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration conversationsV1ServiceServiceConfigurationServiceWebhookConfiguration;
    public FetchServiceWebhookConfigurationResponse withConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration(openapisdk.models.shared.ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration conversationsV1ServiceServiceConfigurationServiceWebhookConfiguration) {
        this.conversationsV1ServiceServiceConfigurationServiceWebhookConfiguration = conversationsV1ServiceServiceConfigurationServiceWebhookConfiguration;
        return this;
    }
}