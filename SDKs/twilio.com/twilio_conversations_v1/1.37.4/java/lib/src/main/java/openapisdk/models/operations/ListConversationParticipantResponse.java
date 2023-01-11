package openapisdk.models.operations;



public class ListConversationParticipantResponse {
    public String contentType;
    public ListConversationParticipantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListConversationParticipantListConversationParticipantResponse listConversationParticipantResponse;
    public ListConversationParticipantResponse withListConversationParticipantResponse(ListConversationParticipantListConversationParticipantResponse listConversationParticipantResponse) {
        this.listConversationParticipantResponse = listConversationParticipantResponse;
        return this;
    }
    public Long statusCode;
    public ListConversationParticipantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}