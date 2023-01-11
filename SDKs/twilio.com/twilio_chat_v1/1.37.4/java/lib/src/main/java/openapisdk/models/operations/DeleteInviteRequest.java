package openapisdk.models.operations;



public class DeleteInviteRequest {
    public String serverURL;
    public DeleteInviteRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteInvitePathParams pathParams;
    public DeleteInviteRequest withPathParams(DeleteInvitePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteInviteSecurity security;
    public DeleteInviteRequest withSecurity(DeleteInviteSecurity security) {
        this.security = security;
        return this;
    }
}