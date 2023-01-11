package openapisdk.models.operations;



public class PatchOfferingsOfferingIdChannelsChannelIdResponse {
    public openapisdk.models.shared.ChannelResponse channelResponse;
    public PatchOfferingsOfferingIdChannelsChannelIdResponse withChannelResponse(openapisdk.models.shared.ChannelResponse channelResponse) {
        this.channelResponse = channelResponse;
        return this;
    }
    public String contentType;
    public PatchOfferingsOfferingIdChannelsChannelIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PatchOfferingsOfferingIdChannelsChannelIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PatchOfferingsOfferingIdChannelsChannelIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}