package openapisdk.models.operations;



public class ListServiceParticipantConversationRequest {
    public String serverURL;
    public ListServiceParticipantConversationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListServiceParticipantConversationPathParams pathParams;
    public ListServiceParticipantConversationRequest withPathParams(ListServiceParticipantConversationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListServiceParticipantConversationQueryParams queryParams;
    public ListServiceParticipantConversationRequest withQueryParams(ListServiceParticipantConversationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListServiceParticipantConversationSecurity security;
    public ListServiceParticipantConversationRequest withSecurity(ListServiceParticipantConversationSecurity security) {
        this.security = security;
        return this;
    }
}