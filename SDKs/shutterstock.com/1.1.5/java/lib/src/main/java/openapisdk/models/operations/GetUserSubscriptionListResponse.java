package openapisdk.models.operations;



public class GetUserSubscriptionListResponse {
    public String contentType;
    public GetUserSubscriptionListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUserSubscriptionListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object subscriptionDataList;
    public GetUserSubscriptionListResponse withSubscriptionDataList(Object subscriptionDataList) {
        this.subscriptionDataList = subscriptionDataList;
        return this;
    }
}