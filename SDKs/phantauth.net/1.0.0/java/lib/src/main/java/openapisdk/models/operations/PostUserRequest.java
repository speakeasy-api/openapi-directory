package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUserRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostUserRequestBody request;
    public PostUserRequest withRequest(PostUserRequestBody request) {
        this.request = request;
        return this;
    }
}