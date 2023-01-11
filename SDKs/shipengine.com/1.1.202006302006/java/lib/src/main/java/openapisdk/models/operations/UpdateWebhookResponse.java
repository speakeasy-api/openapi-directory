package openapisdk.models.operations;



public class UpdateWebhookResponse {
    public String contentType;
    public UpdateWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String emptyResponseBody;
    public UpdateWebhookResponse withEmptyResponseBody(String emptyResponseBody) {
        this.emptyResponseBody = emptyResponseBody;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public UpdateWebhookResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
}