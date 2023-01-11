package openapisdk.models.operations;



public class AndroidpublisherPurchasesSubscriptionsDeferResponse {
    public String contentType;
    public AndroidpublisherPurchasesSubscriptionsDeferResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherPurchasesSubscriptionsDeferResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SubscriptionPurchasesDeferResponse subscriptionPurchasesDeferResponse;
    public AndroidpublisherPurchasesSubscriptionsDeferResponse withSubscriptionPurchasesDeferResponse(openapisdk.models.shared.SubscriptionPurchasesDeferResponse subscriptionPurchasesDeferResponse) {
        this.subscriptionPurchasesDeferResponse = subscriptionPurchasesDeferResponse;
        return this;
    }
}