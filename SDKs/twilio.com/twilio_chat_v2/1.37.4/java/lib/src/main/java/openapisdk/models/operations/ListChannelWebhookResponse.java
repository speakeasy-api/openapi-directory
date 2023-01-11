package openapisdk.models.operations;



public class ListChannelWebhookResponse {
    public String contentType;
    public ListChannelWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListChannelWebhookListChannelWebhookResponse listChannelWebhookResponse;
    public ListChannelWebhookResponse withListChannelWebhookResponse(ListChannelWebhookListChannelWebhookResponse listChannelWebhookResponse) {
        this.listChannelWebhookResponse = listChannelWebhookResponse;
        return this;
    }
    public Long statusCode;
    public ListChannelWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}