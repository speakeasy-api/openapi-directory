package openapisdk.models.operations;



public class FetchInviteRequest {
    public String serverURL;
    public FetchInviteRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchInvitePathParams pathParams;
    public FetchInviteRequest withPathParams(FetchInvitePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchInviteSecurity security;
    public FetchInviteRequest withSecurity(FetchInviteSecurity security) {
        this.security = security;
        return this;
    }
}