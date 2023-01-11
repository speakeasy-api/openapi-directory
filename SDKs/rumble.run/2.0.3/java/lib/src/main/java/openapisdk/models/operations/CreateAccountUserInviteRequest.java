package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAccountUserInviteRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UserInviteOptions request;
    public CreateAccountUserInviteRequest withRequest(openapisdk.models.shared.UserInviteOptions request) {
        this.request = request;
        return this;
    }
    public CreateAccountUserInviteSecurity security;
    public CreateAccountUserInviteRequest withSecurity(CreateAccountUserInviteSecurity security) {
        this.security = security;
        return this;
    }
}