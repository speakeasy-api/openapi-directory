package openapisdk.models.operations;



public class AndroidpublisherMonetizationSubscriptionsPatchResponse {
    public String contentType;
    public AndroidpublisherMonetizationSubscriptionsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherMonetizationSubscriptionsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Subscription subscription;
    public AndroidpublisherMonetizationSubscriptionsPatchResponse withSubscription(openapisdk.models.shared.Subscription subscription) {
        this.subscription = subscription;
        return this;
    }
}