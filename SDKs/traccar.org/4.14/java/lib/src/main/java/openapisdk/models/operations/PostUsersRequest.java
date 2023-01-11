package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUsersRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.User request;
    public PostUsersRequest withRequest(openapisdk.models.shared.User request) {
        this.request = request;
        return this;
    }
}