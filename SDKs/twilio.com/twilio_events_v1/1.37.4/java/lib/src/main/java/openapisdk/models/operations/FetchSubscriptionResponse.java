package openapisdk.models.operations;



public class FetchSubscriptionResponse {
    public String contentType;
    public FetchSubscriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSubscriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.EventsV1Subscription eventsV1Subscription;
    public FetchSubscriptionResponse withEventsV1Subscription(openapisdk.models.shared.EventsV1Subscription eventsV1Subscription) {
        this.eventsV1Subscription = eventsV1Subscription;
        return this;
    }
}