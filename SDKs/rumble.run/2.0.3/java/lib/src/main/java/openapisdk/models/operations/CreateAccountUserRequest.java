package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAccountUserRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UserOptions request;
    public CreateAccountUserRequest withRequest(openapisdk.models.shared.UserOptions request) {
        this.request = request;
        return this;
    }
    public CreateAccountUserSecurity security;
    public CreateAccountUserRequest withSecurity(CreateAccountUserSecurity security) {
        this.security = security;
        return this;
    }
}