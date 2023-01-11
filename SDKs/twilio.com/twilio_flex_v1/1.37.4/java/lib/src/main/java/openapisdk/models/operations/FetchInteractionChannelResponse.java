package openapisdk.models.operations;



public class FetchInteractionChannelResponse {
    public String contentType;
    public FetchInteractionChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchInteractionChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.FlexV1InteractionInteractionChannel flexV1InteractionInteractionChannel;
    public FetchInteractionChannelResponse withFlexV1InteractionInteractionChannel(openapisdk.models.shared.FlexV1InteractionInteractionChannel flexV1InteractionInteractionChannel) {
        this.flexV1InteractionInteractionChannel = flexV1InteractionInteractionChannel;
        return this;
    }
}