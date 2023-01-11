package openapisdk.models.operations;



public class GetWebhooksV3AppIdSubscriptionsGetAllResponse {
    public byte[] body;
    public GetWebhooksV3AppIdSubscriptionsGetAllResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetWebhooksV3AppIdSubscriptionsGetAllResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWebhooksV3AppIdSubscriptionsGetAllResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SubscriptionListResponse subscriptionListResponse;
    public GetWebhooksV3AppIdSubscriptionsGetAllResponse withSubscriptionListResponse(openapisdk.models.shared.SubscriptionListResponse subscriptionListResponse) {
        this.subscriptionListResponse = subscriptionListResponse;
        return this;
    }
}