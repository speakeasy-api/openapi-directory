package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddUserRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UserInput request;
    public AddUserRequest withRequest(openapisdk.models.shared.UserInput request) {
        this.request = request;
        return this;
    }
    public AddUserSecurity security;
    public AddUserRequest withSecurity(AddUserSecurity security) {
        this.security = security;
        return this;
    }
}