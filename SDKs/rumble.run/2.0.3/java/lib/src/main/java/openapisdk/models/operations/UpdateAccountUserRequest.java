package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAccountUserRequest {
    public UpdateAccountUserPathParams pathParams;
    public UpdateAccountUserRequest withPathParams(UpdateAccountUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UserOptions request;
    public UpdateAccountUserRequest withRequest(openapisdk.models.shared.UserOptions request) {
        this.request = request;
        return this;
    }
    public UpdateAccountUserSecurity security;
    public UpdateAccountUserRequest withSecurity(UpdateAccountUserSecurity security) {
        this.security = security;
        return this;
    }
}