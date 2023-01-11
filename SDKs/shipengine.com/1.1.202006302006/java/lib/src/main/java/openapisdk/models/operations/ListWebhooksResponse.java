package openapisdk.models.operations;



public class ListWebhooksResponse {
    public String contentType;
    public ListWebhooksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListWebhooksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public ListWebhooksResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public openapisdk.models.shared.Webhook[] listWebhooksResponseBody;
    public ListWebhooksResponse withListWebhooksResponseBody(openapisdk.models.shared.Webhook[] listWebhooksResponseBody) {
        this.listWebhooksResponseBody = listWebhooksResponseBody;
        return this;
    }
}