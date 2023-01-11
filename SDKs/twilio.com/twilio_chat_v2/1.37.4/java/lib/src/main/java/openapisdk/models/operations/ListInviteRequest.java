package openapisdk.models.operations;



public class ListInviteRequest {
    public String serverURL;
    public ListInviteRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListInvitePathParams pathParams;
    public ListInviteRequest withPathParams(ListInvitePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListInviteQueryParams queryParams;
    public ListInviteRequest withQueryParams(ListInviteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListInviteSecurity security;
    public ListInviteRequest withSecurity(ListInviteSecurity security) {
        this.security = security;
        return this;
    }
}