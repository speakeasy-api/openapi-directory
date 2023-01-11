package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInteractionChannelInviteRequest {
    public String serverURL;
    public CreateInteractionChannelInviteRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateInteractionChannelInvitePathParams pathParams;
    public CreateInteractionChannelInviteRequest withPathParams(CreateInteractionChannelInvitePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateInteractionChannelInviteCreateInteractionChannelInviteRequest request;
    public CreateInteractionChannelInviteRequest withRequest(CreateInteractionChannelInviteCreateInteractionChannelInviteRequest request) {
        this.request = request;
        return this;
    }
    public CreateInteractionChannelInviteSecurity security;
    public CreateInteractionChannelInviteRequest withSecurity(CreateInteractionChannelInviteSecurity security) {
        this.security = security;
        return this;
    }
}