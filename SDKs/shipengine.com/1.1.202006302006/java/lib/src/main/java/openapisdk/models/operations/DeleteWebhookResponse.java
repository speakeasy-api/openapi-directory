package openapisdk.models.operations;



public class DeleteWebhookResponse {
    public String contentType;
    public DeleteWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String emptyResponseBody;
    public DeleteWebhookResponse withEmptyResponseBody(String emptyResponseBody) {
        this.emptyResponseBody = emptyResponseBody;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public DeleteWebhookResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
}