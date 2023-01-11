package openapisdk.models.operations;



public class ListInteractionChannelParticipantRequest {
    public String serverURL;
    public ListInteractionChannelParticipantRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListInteractionChannelParticipantPathParams pathParams;
    public ListInteractionChannelParticipantRequest withPathParams(ListInteractionChannelParticipantPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListInteractionChannelParticipantQueryParams queryParams;
    public ListInteractionChannelParticipantRequest withQueryParams(ListInteractionChannelParticipantQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListInteractionChannelParticipantSecurity security;
    public ListInteractionChannelParticipantRequest withSecurity(ListInteractionChannelParticipantSecurity security) {
        this.security = security;
        return this;
    }
}