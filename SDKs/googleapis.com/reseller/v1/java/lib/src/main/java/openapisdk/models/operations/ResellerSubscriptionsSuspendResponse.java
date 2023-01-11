package openapisdk.models.operations;



public class ResellerSubscriptionsSuspendResponse {
    public String contentType;
    public ResellerSubscriptionsSuspendResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ResellerSubscriptionsSuspendResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Subscription subscription;
    public ResellerSubscriptionsSuspendResponse withSubscription(openapisdk.models.shared.Subscription subscription) {
        this.subscription = subscription;
        return this;
    }
}