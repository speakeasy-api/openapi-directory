package openapisdk.models.operations;



public class YoutubeSubscriptionsInsertResponse {
    public String contentType;
    public YoutubeSubscriptionsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public YoutubeSubscriptionsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Subscription subscription;
    public YoutubeSubscriptionsInsertResponse withSubscription(openapisdk.models.shared.Subscription subscription) {
        this.subscription = subscription;
        return this;
    }
}