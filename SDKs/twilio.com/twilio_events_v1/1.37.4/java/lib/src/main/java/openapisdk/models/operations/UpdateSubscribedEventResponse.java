package openapisdk.models.operations;



public class UpdateSubscribedEventResponse {
    public String contentType;
    public UpdateSubscribedEventResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateSubscribedEventResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.EventsV1SubscriptionSubscribedEvent eventsV1SubscriptionSubscribedEvent;
    public UpdateSubscribedEventResponse withEventsV1SubscriptionSubscribedEvent(openapisdk.models.shared.EventsV1SubscriptionSubscribedEvent eventsV1SubscriptionSubscribedEvent) {
        this.eventsV1SubscriptionSubscribedEvent = eventsV1SubscriptionSubscribedEvent;
        return this;
    }
}