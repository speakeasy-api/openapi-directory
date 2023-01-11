package openapisdk.models.operations;



public class CreateInteractionChannelInviteResponse {
    public String contentType;
    public CreateInteractionChannelInviteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateInteractionChannelInviteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.FlexV1InteractionInteractionChannelInteractionChannelInvite flexV1InteractionInteractionChannelInteractionChannelInvite;
    public CreateInteractionChannelInviteResponse withFlexV1InteractionInteractionChannelInteractionChannelInvite(openapisdk.models.shared.FlexV1InteractionInteractionChannelInteractionChannelInvite flexV1InteractionInteractionChannelInteractionChannelInvite) {
        this.flexV1InteractionInteractionChannelInteractionChannelInvite = flexV1InteractionInteractionChannelInteractionChannelInvite;
        return this;
    }
}