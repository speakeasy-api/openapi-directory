package openapisdk.models.operations;



public class CreateConversationParticipantResponse {
    public String contentType;
    public CreateConversationParticipantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateConversationParticipantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ConversationConversationParticipant conversationsV1ConversationConversationParticipant;
    public CreateConversationParticipantResponse withConversationsV1ConversationConversationParticipant(openapisdk.models.shared.ConversationsV1ConversationConversationParticipant conversationsV1ConversationConversationParticipant) {
        this.conversationsV1ConversationConversationParticipant = conversationsV1ConversationConversationParticipant;
        return this;
    }
}