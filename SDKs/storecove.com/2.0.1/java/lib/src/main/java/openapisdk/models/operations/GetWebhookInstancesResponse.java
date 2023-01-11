package openapisdk.models.operations;



public class GetWebhookInstancesResponse {
    public String contentType;
    public GetWebhookInstancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWebhookInstancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object webhookInstance;
    public GetWebhookInstancesResponse withWebhookInstance(Object webhookInstance) {
        this.webhookInstance = webhookInstance;
        return this;
    }
}