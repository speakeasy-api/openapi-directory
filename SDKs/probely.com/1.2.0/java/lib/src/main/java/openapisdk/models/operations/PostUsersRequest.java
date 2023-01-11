package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUsersRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostUsersRequestBodyInput request;
    public PostUsersRequest withRequest(PostUsersRequestBodyInput request) {
        this.request = request;
        return this;
    }
}