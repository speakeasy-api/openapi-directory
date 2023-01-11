package openapisdk.models.operations;



public class ListWebhookResponse {
    public String contentType;
    public ListWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListWebhookListWebhookResponse listWebhookResponse;
    public ListWebhookResponse withListWebhookResponse(ListWebhookListWebhookResponse listWebhookResponse) {
        this.listWebhookResponse = listWebhookResponse;
        return this;
    }
    public Long statusCode;
    public ListWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}