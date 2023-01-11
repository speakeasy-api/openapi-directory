package openapisdk.models.operations;



public class GetOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsResponse {
    public openapisdk.models.shared.Comment[] comments;
    public GetOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsResponse withComments(openapisdk.models.shared.Comment[] comments) {
        this.comments = comments;
        return this;
    }
    public String contentType;
    public GetOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}