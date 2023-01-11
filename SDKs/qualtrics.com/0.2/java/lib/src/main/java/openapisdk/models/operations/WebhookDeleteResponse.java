package openapisdk.models.operations;



public class WebhookDeleteResponse {
    public String contentType;
    public WebhookDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EventSubscriptionsResponse eventSubscriptionsResponse;
    public WebhookDeleteResponse withEventSubscriptionsResponse(openapisdk.models.shared.EventSubscriptionsResponse eventSubscriptionsResponse) {
        this.eventSubscriptionsResponse = eventSubscriptionsResponse;
        return this;
    }
    public Long statusCode;
    public WebhookDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}