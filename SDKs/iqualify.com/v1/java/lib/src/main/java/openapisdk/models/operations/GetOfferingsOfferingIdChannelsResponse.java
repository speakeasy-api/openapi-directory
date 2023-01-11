package openapisdk.models.operations;



public class GetOfferingsOfferingIdChannelsResponse {
    public openapisdk.models.shared.ChannelResponse[] channelResponses;
    public GetOfferingsOfferingIdChannelsResponse withChannelResponses(openapisdk.models.shared.ChannelResponse[] channelResponses) {
        this.channelResponses = channelResponses;
        return this;
    }
    public String contentType;
    public GetOfferingsOfferingIdChannelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetOfferingsOfferingIdChannelsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetOfferingsOfferingIdChannelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}