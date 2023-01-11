package openapisdk.models.operations;



public class ResellerSubscriptionsActivateResponse {
    public String contentType;
    public ResellerSubscriptionsActivateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ResellerSubscriptionsActivateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Subscription subscription;
    public ResellerSubscriptionsActivateResponse withSubscription(openapisdk.models.shared.Subscription subscription) {
        this.subscription = subscription;
        return this;
    }
}