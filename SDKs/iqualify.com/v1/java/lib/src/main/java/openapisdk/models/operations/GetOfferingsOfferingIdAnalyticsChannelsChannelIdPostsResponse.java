package openapisdk.models.operations;



public class GetOfferingsOfferingIdAnalyticsChannelsChannelIdPostsResponse {
    public String contentType;
    public GetOfferingsOfferingIdAnalyticsChannelsChannelIdPostsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetOfferingsOfferingIdAnalyticsChannelsChannelIdPostsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetOfferingsOfferingIdAnalyticsChannelsChannelIdPostsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.HttpPost[] httpPosts;
    public GetOfferingsOfferingIdAnalyticsChannelsChannelIdPostsResponse withHttpPosts(openapisdk.models.shared.HttpPost[] httpPosts) {
        this.httpPosts = httpPosts;
        return this;
    }
}