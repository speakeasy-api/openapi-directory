package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangePasswordRequest {
    public ChangePasswordPathParams pathParams;
    public ChangePasswordRequest withPathParams(ChangePasswordPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ChangePasswordRequestBody request;
    public ChangePasswordRequest withRequest(ChangePasswordRequestBody request) {
        this.request = request;
        return this;
    }
}