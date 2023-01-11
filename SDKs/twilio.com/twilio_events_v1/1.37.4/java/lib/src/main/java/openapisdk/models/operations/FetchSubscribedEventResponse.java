package openapisdk.models.operations;



public class FetchSubscribedEventResponse {
    public String contentType;
    public FetchSubscribedEventResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSubscribedEventResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.EventsV1SubscriptionSubscribedEvent eventsV1SubscriptionSubscribedEvent;
    public FetchSubscribedEventResponse withEventsV1SubscriptionSubscribedEvent(openapisdk.models.shared.EventsV1SubscriptionSubscribedEvent eventsV1SubscriptionSubscribedEvent) {
        this.eventsV1SubscriptionSubscribedEvent = eventsV1SubscriptionSubscribedEvent;
        return this;
    }
}