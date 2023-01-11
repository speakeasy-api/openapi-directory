package openapisdk.models.operations;



public class ListServiceConversationParticipantRequest {
    public String serverURL;
    public ListServiceConversationParticipantRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListServiceConversationParticipantPathParams pathParams;
    public ListServiceConversationParticipantRequest withPathParams(ListServiceConversationParticipantPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListServiceConversationParticipantQueryParams queryParams;
    public ListServiceConversationParticipantRequest withQueryParams(ListServiceConversationParticipantQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListServiceConversationParticipantSecurity security;
    public ListServiceConversationParticipantRequest withSecurity(ListServiceConversationParticipantSecurity security) {
        this.security = security;
        return this;
    }
}