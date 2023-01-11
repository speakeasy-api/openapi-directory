package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUserRequest {
    public UpdateUserPathParams pathParams;
    public UpdateUserRequest withPathParams(UpdateUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UserUpdateContent request;
    public UpdateUserRequest withRequest(openapisdk.models.shared.UserUpdateContent request) {
        this.request = request;
        return this;
    }
}