package openapisdk.models.operations;



public class GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesResponse {
    public openapisdk.models.shared.Comment[] comments;
    public GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesResponse withComments(openapisdk.models.shared.Comment[] comments) {
        this.comments = comments;
        return this;
    }
    public String contentType;
    public GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}