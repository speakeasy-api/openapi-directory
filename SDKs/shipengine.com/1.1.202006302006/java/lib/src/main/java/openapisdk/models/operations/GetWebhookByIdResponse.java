package openapisdk.models.operations;



public class GetWebhookByIdResponse {
    public String contentType;
    public GetWebhookByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWebhookByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public GetWebhookByIdResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public openapisdk.models.shared.GetWebhookByIdResponseBody getWebhookByIdResponseBody;
    public GetWebhookByIdResponse withGetWebhookByIdResponseBody(openapisdk.models.shared.GetWebhookByIdResponseBody getWebhookByIdResponseBody) {
        this.getWebhookByIdResponseBody = getWebhookByIdResponseBody;
        return this;
    }
}