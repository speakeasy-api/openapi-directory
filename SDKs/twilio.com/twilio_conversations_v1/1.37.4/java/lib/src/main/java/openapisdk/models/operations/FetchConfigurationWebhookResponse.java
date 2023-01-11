package openapisdk.models.operations;



public class FetchConfigurationWebhookResponse {
    public String contentType;
    public FetchConfigurationWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchConfigurationWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ConfigurationConfigurationWebhook conversationsV1ConfigurationConfigurationWebhook;
    public FetchConfigurationWebhookResponse withConversationsV1ConfigurationConfigurationWebhook(openapisdk.models.shared.ConversationsV1ConfigurationConfigurationWebhook conversationsV1ConfigurationConfigurationWebhook) {
        this.conversationsV1ConfigurationConfigurationWebhook = conversationsV1ConfigurationConfigurationWebhook;
        return this;
    }
}