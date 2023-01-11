package openapisdk.models.operations;



public class CreateSubscribedEventResponse {
    public String contentType;
    public CreateSubscribedEventResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateSubscribedEventResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.EventsV1SubscriptionSubscribedEvent eventsV1SubscriptionSubscribedEvent;
    public CreateSubscribedEventResponse withEventsV1SubscriptionSubscribedEvent(openapisdk.models.shared.EventsV1SubscriptionSubscribedEvent eventsV1SubscriptionSubscribedEvent) {
        this.eventsV1SubscriptionSubscribedEvent = eventsV1SubscriptionSubscribedEvent;
        return this;
    }
}