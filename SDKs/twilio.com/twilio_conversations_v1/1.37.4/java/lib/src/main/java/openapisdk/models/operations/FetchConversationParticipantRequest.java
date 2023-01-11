package openapisdk.models.operations;



public class FetchConversationParticipantRequest {
    public String serverURL;
    public FetchConversationParticipantRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchConversationParticipantPathParams pathParams;
    public FetchConversationParticipantRequest withPathParams(FetchConversationParticipantPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchConversationParticipantSecurity security;
    public FetchConversationParticipantRequest withSecurity(FetchConversationParticipantSecurity security) {
        this.security = security;
        return this;
    }
}