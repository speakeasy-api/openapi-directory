package openapisdk.models.operations;



public class AndroidpublisherPurchasesSubscriptionsv2GetResponse {
    public String contentType;
    public AndroidpublisherPurchasesSubscriptionsv2GetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherPurchasesSubscriptionsv2GetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SubscriptionPurchaseV2 subscriptionPurchaseV2;
    public AndroidpublisherPurchasesSubscriptionsv2GetResponse withSubscriptionPurchaseV2(openapisdk.models.shared.SubscriptionPurchaseV2 subscriptionPurchaseV2) {
        this.subscriptionPurchaseV2 = subscriptionPurchaseV2;
        return this;
    }
}