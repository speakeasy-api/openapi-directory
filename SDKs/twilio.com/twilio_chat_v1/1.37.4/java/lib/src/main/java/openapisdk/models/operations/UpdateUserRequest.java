package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUserRequest {
    public String serverURL;
    public UpdateUserRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateUserPathParams pathParams;
    public UpdateUserRequest withPathParams(UpdateUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateUserUpdateUserRequest request;
    public UpdateUserRequest withRequest(UpdateUserUpdateUserRequest request) {
        this.request = request;
        return this;
    }
    public UpdateUserSecurity security;
    public UpdateUserRequest withSecurity(UpdateUserSecurity security) {
        this.security = security;
        return this;
    }
}