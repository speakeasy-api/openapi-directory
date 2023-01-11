package openapisdk.models.operations;



public class AppsGetWebhookConfigForAppResponse {
    public String contentType;
    public AppsGetWebhookConfigForAppResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AppsGetWebhookConfigForAppResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WebhookConfig webhookConfig;
    public AppsGetWebhookConfigForAppResponse withWebhookConfig(openapisdk.models.shared.WebhookConfig webhookConfig) {
        this.webhookConfig = webhookConfig;
        return this;
    }
}