package openapisdk.models.operations;



public class YoutubeSubscriptionsListResponse {
    public String contentType;
    public YoutubeSubscriptionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public YoutubeSubscriptionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SubscriptionListResponse subscriptionListResponse;
    public YoutubeSubscriptionsListResponse withSubscriptionListResponse(openapisdk.models.shared.SubscriptionListResponse subscriptionListResponse) {
        this.subscriptionListResponse = subscriptionListResponse;
        return this;
    }
}