package openapisdk.models.operations;



public class ItemWebhookUpdateResponse {
    public String contentType;
    public ItemWebhookUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> itemWebhookUpdateResponse;
    public ItemWebhookUpdateResponse withItemWebhookUpdateResponse(java.util.Map<String, Object> itemWebhookUpdateResponse) {
        this.itemWebhookUpdateResponse = itemWebhookUpdateResponse;
        return this;
    }
    public Long statusCode;
    public ItemWebhookUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}