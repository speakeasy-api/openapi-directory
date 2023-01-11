package openapisdk.models.operations;



public class PostWebhooksResponse {
    public String contentType;
    public PostWebhooksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateWebhookResponse createWebhookResponse;
    public PostWebhooksResponse withCreateWebhookResponse(openapisdk.models.shared.CreateWebhookResponse createWebhookResponse) {
        this.createWebhookResponse = createWebhookResponse;
        return this;
    }
    public Long statusCode;
    public PostWebhooksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}