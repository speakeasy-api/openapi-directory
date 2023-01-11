package openapisdk.models.operations;



public class UpdateConversationParticipantResponse {
    public String contentType;
    public UpdateConversationParticipantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateConversationParticipantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ConversationConversationParticipant conversationsV1ConversationConversationParticipant;
    public UpdateConversationParticipantResponse withConversationsV1ConversationConversationParticipant(openapisdk.models.shared.ConversationsV1ConversationConversationParticipant conversationsV1ConversationConversationParticipant) {
        this.conversationsV1ConversationConversationParticipant = conversationsV1ConversationConversationParticipant;
        return this;
    }
}