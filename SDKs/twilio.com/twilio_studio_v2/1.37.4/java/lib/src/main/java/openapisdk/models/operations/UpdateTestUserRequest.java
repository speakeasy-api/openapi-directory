package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTestUserRequest {
    public String serverURL;
    public UpdateTestUserRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateTestUserPathParams pathParams;
    public UpdateTestUserRequest withPathParams(UpdateTestUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateTestUserUpdateTestUserRequest request;
    public UpdateTestUserRequest withRequest(UpdateTestUserUpdateTestUserRequest request) {
        this.request = request;
        return this;
    }
    public UpdateTestUserSecurity security;
    public UpdateTestUserRequest withSecurity(UpdateTestUserSecurity security) {
        this.security = security;
        return this;
    }
}