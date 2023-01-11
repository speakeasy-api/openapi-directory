package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInviteRequest {
    public String serverURL;
    public CreateInviteRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateInvitePathParams pathParams;
    public CreateInviteRequest withPathParams(CreateInvitePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateInviteCreateInviteRequest request;
    public CreateInviteRequest withRequest(CreateInviteCreateInviteRequest request) {
        this.request = request;
        return this;
    }
    public CreateInviteSecurity security;
    public CreateInviteRequest withSecurity(CreateInviteSecurity security) {
        this.security = security;
        return this;
    }
}