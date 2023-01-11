package openapisdk.models.operations;



public class WebhooksSubscribeResponse {
    public String contentType;
    public WebhooksSubscribeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public WebhooksSubscribeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WebhookResponse webhookResponse;
    public WebhooksSubscribeResponse withWebhookResponse(openapisdk.models.shared.WebhookResponse webhookResponse) {
        this.webhookResponse = webhookResponse;
        return this;
    }
}