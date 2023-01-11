package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostResetRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostResetRequestBody request;
    public PostResetRequest withRequest(PostResetRequestBody request) {
        this.request = request;
        return this;
    }
}