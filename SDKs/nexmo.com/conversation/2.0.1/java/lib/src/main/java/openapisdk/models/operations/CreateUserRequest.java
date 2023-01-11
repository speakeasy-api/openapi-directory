package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUserRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateUserRequestBody request;
    public CreateUserRequest withRequest(CreateUserRequestBody request) {
        this.request = request;
        return this;
    }
}