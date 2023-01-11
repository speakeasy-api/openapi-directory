package openapisdk.models.operations;



public class SubscriptionsApiListResponse {
    public String contentType;
    public SubscriptionsApiListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SubscriptionsApiListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SubscriptionView[] subscriptionViews;
    public SubscriptionsApiListResponse withSubscriptionViews(openapisdk.models.shared.SubscriptionView[] subscriptionViews) {
        this.subscriptionViews = subscriptionViews;
        return this;
    }
}