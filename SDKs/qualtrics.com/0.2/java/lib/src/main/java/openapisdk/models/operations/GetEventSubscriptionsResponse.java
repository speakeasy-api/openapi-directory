package openapisdk.models.operations;



public class GetEventSubscriptionsResponse {
    public String contentType;
    public GetEventSubscriptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EventSubscriptionsResponse eventSubscriptionsResponse;
    public GetEventSubscriptionsResponse withEventSubscriptionsResponse(openapisdk.models.shared.EventSubscriptionsResponse eventSubscriptionsResponse) {
        this.eventSubscriptionsResponse = eventSubscriptionsResponse;
        return this;
    }
    public Long statusCode;
    public GetEventSubscriptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}