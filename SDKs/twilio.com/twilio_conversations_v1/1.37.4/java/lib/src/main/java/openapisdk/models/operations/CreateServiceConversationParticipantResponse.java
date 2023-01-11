package openapisdk.models.operations;



public class CreateServiceConversationParticipantResponse {
    public String contentType;
    public CreateServiceConversationParticipantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateServiceConversationParticipantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant conversationsV1ServiceServiceConversationServiceConversationParticipant;
    public CreateServiceConversationParticipantResponse withConversationsV1ServiceServiceConversationServiceConversationParticipant(openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant conversationsV1ServiceServiceConversationServiceConversationParticipant) {
        this.conversationsV1ServiceServiceConversationServiceConversationParticipant = conversationsV1ServiceServiceConversationServiceConversationParticipant;
        return this;
    }
}