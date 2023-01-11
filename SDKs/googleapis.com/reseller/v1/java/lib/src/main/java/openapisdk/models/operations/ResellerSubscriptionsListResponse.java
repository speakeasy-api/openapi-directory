package openapisdk.models.operations;



public class ResellerSubscriptionsListResponse {
    public String contentType;
    public ResellerSubscriptionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ResellerSubscriptionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Subscriptions subscriptions;
    public ResellerSubscriptionsListResponse withSubscriptions(openapisdk.models.shared.Subscriptions subscriptions) {
        this.subscriptions = subscriptions;
        return this;
    }
}