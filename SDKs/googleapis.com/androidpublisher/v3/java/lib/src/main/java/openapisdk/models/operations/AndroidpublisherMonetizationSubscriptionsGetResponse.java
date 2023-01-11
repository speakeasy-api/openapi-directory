package openapisdk.models.operations;



public class AndroidpublisherMonetizationSubscriptionsGetResponse {
    public String contentType;
    public AndroidpublisherMonetizationSubscriptionsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherMonetizationSubscriptionsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Subscription subscription;
    public AndroidpublisherMonetizationSubscriptionsGetResponse withSubscription(openapisdk.models.shared.Subscription subscription) {
        this.subscription = subscription;
        return this;
    }
}