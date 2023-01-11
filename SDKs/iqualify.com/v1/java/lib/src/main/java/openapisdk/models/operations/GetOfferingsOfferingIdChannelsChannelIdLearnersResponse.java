package openapisdk.models.operations;



public class GetOfferingsOfferingIdChannelsChannelIdLearnersResponse {
    public openapisdk.models.shared.ChannelResponse channelResponse;
    public GetOfferingsOfferingIdChannelsChannelIdLearnersResponse withChannelResponse(openapisdk.models.shared.ChannelResponse channelResponse) {
        this.channelResponse = channelResponse;
        return this;
    }
    public String contentType;
    public GetOfferingsOfferingIdChannelsChannelIdLearnersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetOfferingsOfferingIdChannelsChannelIdLearnersResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetOfferingsOfferingIdChannelsChannelIdLearnersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}