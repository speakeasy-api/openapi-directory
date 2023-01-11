package openapisdk.models.operations;



public class WebhookVerificationKeyGetResponse {
    public String contentType;
    public WebhookVerificationKeyGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public WebhookVerificationKeyGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> webhookVerificationKeyGetResponse;
    public WebhookVerificationKeyGetResponse withWebhookVerificationKeyGetResponse(java.util.Map<String, Object> webhookVerificationKeyGetResponse) {
        this.webhookVerificationKeyGetResponse = webhookVerificationKeyGetResponse;
        return this;
    }
}