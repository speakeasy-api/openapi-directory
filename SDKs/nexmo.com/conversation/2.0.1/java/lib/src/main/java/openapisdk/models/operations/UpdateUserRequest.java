package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUserRequest {
    public UpdateUserPathParams pathParams;
    public UpdateUserRequest withPathParams(UpdateUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public UpdateUserRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}