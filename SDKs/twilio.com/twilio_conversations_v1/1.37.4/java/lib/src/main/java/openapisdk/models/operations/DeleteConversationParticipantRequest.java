package openapisdk.models.operations;



public class DeleteConversationParticipantRequest {
    public String serverURL;
    public DeleteConversationParticipantRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteConversationParticipantPathParams pathParams;
    public DeleteConversationParticipantRequest withPathParams(DeleteConversationParticipantPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteConversationParticipantHeaders headers;
    public DeleteConversationParticipantRequest withHeaders(DeleteConversationParticipantHeaders headers) {
        this.headers = headers;
        return this;
    }
    public DeleteConversationParticipantSecurity security;
    public DeleteConversationParticipantRequest withSecurity(DeleteConversationParticipantSecurity security) {
        this.security = security;
        return this;
    }
}