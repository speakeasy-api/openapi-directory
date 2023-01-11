package openapisdk.models.operations;



public class PubsubSubscriptionsCreateResponse {
    public String contentType;
    public PubsubSubscriptionsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PubsubSubscriptionsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Subscription subscription;
    public PubsubSubscriptionsCreateResponse withSubscription(openapisdk.models.shared.Subscription subscription) {
        this.subscription = subscription;
        return this;
    }
}