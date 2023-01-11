package openapisdk.models.operations;



public class UpdateInteractionChannelResponse {
    public String contentType;
    public UpdateInteractionChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateInteractionChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.FlexV1InteractionInteractionChannel flexV1InteractionInteractionChannel;
    public UpdateInteractionChannelResponse withFlexV1InteractionInteractionChannel(openapisdk.models.shared.FlexV1InteractionInteractionChannel flexV1InteractionInteractionChannel) {
        this.flexV1InteractionInteractionChannel = flexV1InteractionInteractionChannel;
        return this;
    }
}