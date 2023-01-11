package openapisdk.models.operations;



public class WhenAResponseIsReceivedResponse {
    public String contentType;
    public WhenAResponseIsReceivedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EventSubscriptionsResponse eventSubscriptionsResponse;
    public WhenAResponseIsReceivedResponse withEventSubscriptionsResponse(openapisdk.models.shared.EventSubscriptionsResponse eventSubscriptionsResponse) {
        this.eventSubscriptionsResponse = eventSubscriptionsResponse;
        return this;
    }
    public Long statusCode;
    public WhenAResponseIsReceivedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}