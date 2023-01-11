package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUserRequest {
    public String serverURL;
    public CreateUserRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateUserPathParams pathParams;
    public CreateUserRequest withPathParams(CreateUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateUserCreateUserRequest request;
    public CreateUserRequest withRequest(CreateUserCreateUserRequest request) {
        this.request = request;
        return this;
    }
    public CreateUserSecurity security;
    public CreateUserRequest withSecurity(CreateUserSecurity security) {
        this.security = security;
        return this;
    }
}