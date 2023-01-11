package openapisdk.models.operations;



public class AndroidpublisherPurchasesSubscriptionsGetResponse {
    public String contentType;
    public AndroidpublisherPurchasesSubscriptionsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherPurchasesSubscriptionsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SubscriptionPurchase subscriptionPurchase;
    public AndroidpublisherPurchasesSubscriptionsGetResponse withSubscriptionPurchase(openapisdk.models.shared.SubscriptionPurchase subscriptionPurchase) {
        this.subscriptionPurchase = subscriptionPurchase;
        return this;
    }
}