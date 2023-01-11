package openapisdk.models.operations;



public class PubsubSubscriptionsGetResponse {
    public String contentType;
    public PubsubSubscriptionsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PubsubSubscriptionsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Subscription subscription;
    public PubsubSubscriptionsGetResponse withSubscription(openapisdk.models.shared.Subscription subscription) {
        this.subscription = subscription;
        return this;
    }
}