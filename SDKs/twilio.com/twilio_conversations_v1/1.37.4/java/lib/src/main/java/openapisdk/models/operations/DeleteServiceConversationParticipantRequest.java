package openapisdk.models.operations;



public class DeleteServiceConversationParticipantRequest {
    public String serverURL;
    public DeleteServiceConversationParticipantRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteServiceConversationParticipantPathParams pathParams;
    public DeleteServiceConversationParticipantRequest withPathParams(DeleteServiceConversationParticipantPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteServiceConversationParticipantHeaders headers;
    public DeleteServiceConversationParticipantRequest withHeaders(DeleteServiceConversationParticipantHeaders headers) {
        this.headers = headers;
        return this;
    }
    public DeleteServiceConversationParticipantSecurity security;
    public DeleteServiceConversationParticipantRequest withSecurity(DeleteServiceConversationParticipantSecurity security) {
        this.security = security;
        return this;
    }
}