package openapisdk.models.operations;



public class GetWebhooksResponse {
    public String contentType;
    public GetWebhooksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListWebhooksResponse listWebhooksResponse;
    public GetWebhooksResponse withListWebhooksResponse(openapisdk.models.shared.ListWebhooksResponse listWebhooksResponse) {
        this.listWebhooksResponse = listWebhooksResponse;
        return this;
    }
    public Long statusCode;
    public GetWebhooksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}