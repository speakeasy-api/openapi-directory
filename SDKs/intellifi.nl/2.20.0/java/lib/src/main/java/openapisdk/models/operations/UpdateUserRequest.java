package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUserRequest {
    public UpdateUserPathParams pathParams;
    public UpdateUserRequest withPathParams(UpdateUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UserInput request;
    public UpdateUserRequest withRequest(openapisdk.models.shared.UserInput request) {
        this.request = request;
        return this;
    }
    public UpdateUserSecurity security;
    public UpdateUserRequest withSecurity(UpdateUserSecurity security) {
        this.security = security;
        return this;
    }
}