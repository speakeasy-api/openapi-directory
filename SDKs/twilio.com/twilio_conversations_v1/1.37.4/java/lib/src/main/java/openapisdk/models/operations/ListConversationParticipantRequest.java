package openapisdk.models.operations;



public class ListConversationParticipantRequest {
    public String serverURL;
    public ListConversationParticipantRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListConversationParticipantPathParams pathParams;
    public ListConversationParticipantRequest withPathParams(ListConversationParticipantPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListConversationParticipantQueryParams queryParams;
    public ListConversationParticipantRequest withQueryParams(ListConversationParticipantQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListConversationParticipantSecurity security;
    public ListConversationParticipantRequest withSecurity(ListConversationParticipantSecurity security) {
        this.security = security;
        return this;
    }
}