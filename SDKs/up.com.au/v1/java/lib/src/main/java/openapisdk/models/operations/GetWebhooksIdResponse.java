package openapisdk.models.operations;



public class GetWebhooksIdResponse {
    public String contentType;
    public GetWebhooksIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetWebhookResponse getWebhookResponse;
    public GetWebhooksIdResponse withGetWebhookResponse(openapisdk.models.shared.GetWebhookResponse getWebhookResponse) {
        this.getWebhookResponse = getWebhookResponse;
        return this;
    }
    public Long statusCode;
    public GetWebhooksIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}