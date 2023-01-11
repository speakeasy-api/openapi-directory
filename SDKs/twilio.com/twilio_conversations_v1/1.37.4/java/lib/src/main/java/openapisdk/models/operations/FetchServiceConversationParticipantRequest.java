package openapisdk.models.operations;



public class FetchServiceConversationParticipantRequest {
    public String serverURL;
    public FetchServiceConversationParticipantRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchServiceConversationParticipantPathParams pathParams;
    public FetchServiceConversationParticipantRequest withPathParams(FetchServiceConversationParticipantPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchServiceConversationParticipantSecurity security;
    public FetchServiceConversationParticipantRequest withSecurity(FetchServiceConversationParticipantSecurity security) {
        this.security = security;
        return this;
    }
}