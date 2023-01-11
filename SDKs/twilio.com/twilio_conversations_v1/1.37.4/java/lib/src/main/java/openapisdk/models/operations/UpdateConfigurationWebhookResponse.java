package openapisdk.models.operations;



public class UpdateConfigurationWebhookResponse {
    public String contentType;
    public UpdateConfigurationWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateConfigurationWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ConfigurationConfigurationWebhook conversationsV1ConfigurationConfigurationWebhook;
    public UpdateConfigurationWebhookResponse withConversationsV1ConfigurationConfigurationWebhook(openapisdk.models.shared.ConversationsV1ConfigurationConfigurationWebhook conversationsV1ConfigurationConfigurationWebhook) {
        this.conversationsV1ConfigurationConfigurationWebhook = conversationsV1ConfigurationConfigurationWebhook;
        return this;
    }
}