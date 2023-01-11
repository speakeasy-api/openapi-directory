package openapisdk.models.operations;



public class ResellerSubscriptionsChangeSeatsResponse {
    public String contentType;
    public ResellerSubscriptionsChangeSeatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ResellerSubscriptionsChangeSeatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Subscription subscription;
    public ResellerSubscriptionsChangeSeatsResponse withSubscription(openapisdk.models.shared.Subscription subscription) {
        this.subscription = subscription;
        return this;
    }
}