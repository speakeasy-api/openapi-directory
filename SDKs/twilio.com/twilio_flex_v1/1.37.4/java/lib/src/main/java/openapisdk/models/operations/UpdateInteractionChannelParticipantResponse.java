package openapisdk.models.operations;



public class UpdateInteractionChannelParticipantResponse {
    public String contentType;
    public UpdateInteractionChannelParticipantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateInteractionChannelParticipantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.FlexV1InteractionInteractionChannelInteractionChannelParticipant flexV1InteractionInteractionChannelInteractionChannelParticipant;
    public UpdateInteractionChannelParticipantResponse withFlexV1InteractionInteractionChannelInteractionChannelParticipant(openapisdk.models.shared.FlexV1InteractionInteractionChannelInteractionChannelParticipant flexV1InteractionInteractionChannelInteractionChannelParticipant) {
        this.flexV1InteractionInteractionChannelInteractionChannelParticipant = flexV1InteractionInteractionChannelInteractionChannelParticipant;
        return this;
    }
}