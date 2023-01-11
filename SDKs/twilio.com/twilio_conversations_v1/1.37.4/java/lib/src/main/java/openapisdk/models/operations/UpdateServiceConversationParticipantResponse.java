package openapisdk.models.operations;



public class UpdateServiceConversationParticipantResponse {
    public String contentType;
    public UpdateServiceConversationParticipantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateServiceConversationParticipantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant conversationsV1ServiceServiceConversationServiceConversationParticipant;
    public UpdateServiceConversationParticipantResponse withConversationsV1ServiceServiceConversationServiceConversationParticipant(openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant conversationsV1ServiceServiceConversationServiceConversationParticipant) {
        this.conversationsV1ServiceServiceConversationServiceConversationParticipant = conversationsV1ServiceServiceConversationServiceConversationParticipant;
        return this;
    }
}