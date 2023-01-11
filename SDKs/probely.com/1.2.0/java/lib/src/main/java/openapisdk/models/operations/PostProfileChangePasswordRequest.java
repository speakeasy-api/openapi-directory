package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostProfileChangePasswordRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostProfileChangePasswordRequestBody request;
    public PostProfileChangePasswordRequest withRequest(PostProfileChangePasswordRequestBody request) {
        this.request = request;
        return this;
    }
}