package openapisdk.models.operations;



public class GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdResponse {
    public byte[] body;
    public GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SubscriptionResponse subscriptionResponse;
    public GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdResponse withSubscriptionResponse(openapisdk.models.shared.SubscriptionResponse subscriptionResponse) {
        this.subscriptionResponse = subscriptionResponse;
        return this;
    }
}