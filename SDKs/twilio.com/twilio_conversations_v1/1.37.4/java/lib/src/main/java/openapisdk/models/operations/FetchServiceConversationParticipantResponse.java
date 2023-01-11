package openapisdk.models.operations;



public class FetchServiceConversationParticipantResponse {
    public String contentType;
    public FetchServiceConversationParticipantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchServiceConversationParticipantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant conversationsV1ServiceServiceConversationServiceConversationParticipant;
    public FetchServiceConversationParticipantResponse withConversationsV1ServiceServiceConversationServiceConversationParticipant(openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant conversationsV1ServiceServiceConversationServiceConversationParticipant) {
        this.conversationsV1ServiceServiceConversationServiceConversationParticipant = conversationsV1ServiceServiceConversationServiceConversationParticipant;
        return this;
    }
}