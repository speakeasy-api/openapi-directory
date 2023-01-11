package openapisdk.models.operations;



public class CreateWebhookResponse {
    public String contentType;
    public CreateWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CreateWebhookResponseBody createWebhookResponseBody;
    public CreateWebhookResponse withCreateWebhookResponseBody(openapisdk.models.shared.CreateWebhookResponseBody createWebhookResponseBody) {
        this.createWebhookResponseBody = createWebhookResponseBody;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public CreateWebhookResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
}