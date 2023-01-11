package openapisdk.models.operations;



public class CreateSubscriptionResponse {
    public String contentType;
    public CreateSubscriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateSubscriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.EventsV1Subscription eventsV1Subscription;
    public CreateSubscriptionResponse withEventsV1Subscription(openapisdk.models.shared.EventsV1Subscription eventsV1Subscription) {
        this.eventsV1Subscription = eventsV1Subscription;
        return this;
    }
}