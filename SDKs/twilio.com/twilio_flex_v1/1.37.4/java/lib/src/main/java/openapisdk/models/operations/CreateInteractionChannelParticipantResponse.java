package openapisdk.models.operations;



public class CreateInteractionChannelParticipantResponse {
    public String contentType;
    public CreateInteractionChannelParticipantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateInteractionChannelParticipantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.FlexV1InteractionInteractionChannelInteractionChannelParticipant flexV1InteractionInteractionChannelInteractionChannelParticipant;
    public CreateInteractionChannelParticipantResponse withFlexV1InteractionInteractionChannelInteractionChannelParticipant(openapisdk.models.shared.FlexV1InteractionInteractionChannelInteractionChannelParticipant flexV1InteractionInteractionChannelInteractionChannelParticipant) {
        this.flexV1InteractionInteractionChannelInteractionChannelParticipant = flexV1InteractionInteractionChannelInteractionChannelParticipant;
        return this;
    }
}