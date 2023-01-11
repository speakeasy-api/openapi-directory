package openapisdk.models.operations;



public class ResellerSubscriptionsStartPaidServiceResponse {
    public String contentType;
    public ResellerSubscriptionsStartPaidServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ResellerSubscriptionsStartPaidServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Subscription subscription;
    public ResellerSubscriptionsStartPaidServiceResponse withSubscription(openapisdk.models.shared.Subscription subscription) {
        this.subscription = subscription;
        return this;
    }
}