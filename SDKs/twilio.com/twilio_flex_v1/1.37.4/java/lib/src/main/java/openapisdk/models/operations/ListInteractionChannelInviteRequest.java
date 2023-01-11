package openapisdk.models.operations;



public class ListInteractionChannelInviteRequest {
    public String serverURL;
    public ListInteractionChannelInviteRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListInteractionChannelInvitePathParams pathParams;
    public ListInteractionChannelInviteRequest withPathParams(ListInteractionChannelInvitePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListInteractionChannelInviteQueryParams queryParams;
    public ListInteractionChannelInviteRequest withQueryParams(ListInteractionChannelInviteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListInteractionChannelInviteSecurity security;
    public ListInteractionChannelInviteRequest withSecurity(ListInteractionChannelInviteSecurity security) {
        this.security = security;
        return this;
    }
}