package openapisdk.models.operations;



public class PostWebhooksWebhookIdPingResponse {
    public String contentType;
    public PostWebhooksWebhookIdPingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostWebhooksWebhookIdPingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WebhookEventCallback webhookEventCallback;
    public PostWebhooksWebhookIdPingResponse withWebhookEventCallback(openapisdk.models.shared.WebhookEventCallback webhookEventCallback) {
        this.webhookEventCallback = webhookEventCallback;
        return this;
    }
}