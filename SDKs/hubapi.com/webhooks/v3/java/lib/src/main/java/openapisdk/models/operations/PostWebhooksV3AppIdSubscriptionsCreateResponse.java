package openapisdk.models.operations;



public class PostWebhooksV3AppIdSubscriptionsCreateResponse {
    public byte[] body;
    public PostWebhooksV3AppIdSubscriptionsCreateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostWebhooksV3AppIdSubscriptionsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostWebhooksV3AppIdSubscriptionsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SubscriptionResponse subscriptionResponse;
    public PostWebhooksV3AppIdSubscriptionsCreateResponse withSubscriptionResponse(openapisdk.models.shared.SubscriptionResponse subscriptionResponse) {
        this.subscriptionResponse = subscriptionResponse;
        return this;
    }
}