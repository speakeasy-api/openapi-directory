package openapisdk.models.operations;



public class ListParticipantConversationRequest {
    public String serverURL;
    public ListParticipantConversationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListParticipantConversationQueryParams queryParams;
    public ListParticipantConversationRequest withQueryParams(ListParticipantConversationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListParticipantConversationSecurity security;
    public ListParticipantConversationRequest withSecurity(ListParticipantConversationSecurity security) {
        this.security = security;
        return this;
    }
}