package openapisdk.models.operations;



public class WebhooksFetchAllResponse {
    public String contentType;
    public WebhooksFetchAllResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public WebhooksFetchAllResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WebhooksResponse webhooksResponse;
    public WebhooksFetchAllResponse withWebhooksResponse(openapisdk.models.shared.WebhooksResponse webhooksResponse) {
        this.webhooksResponse = webhooksResponse;
        return this;
    }
}