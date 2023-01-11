package openapisdk.models.operations;



public class PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateResponse {
    public byte[] body;
    public PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SubscriptionResponse subscriptionResponse;
    public PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateResponse withSubscriptionResponse(openapisdk.models.shared.SubscriptionResponse subscriptionResponse) {
        this.subscriptionResponse = subscriptionResponse;
        return this;
    }
}