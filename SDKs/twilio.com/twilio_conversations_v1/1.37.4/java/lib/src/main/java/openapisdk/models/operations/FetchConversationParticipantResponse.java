package openapisdk.models.operations;



public class FetchConversationParticipantResponse {
    public String contentType;
    public FetchConversationParticipantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchConversationParticipantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ConversationConversationParticipant conversationsV1ConversationConversationParticipant;
    public FetchConversationParticipantResponse withConversationsV1ConversationConversationParticipant(openapisdk.models.shared.ConversationsV1ConversationConversationParticipant conversationsV1ConversationConversationParticipant) {
        this.conversationsV1ConversationConversationParticipant = conversationsV1ConversationConversationParticipant;
        return this;
    }
}