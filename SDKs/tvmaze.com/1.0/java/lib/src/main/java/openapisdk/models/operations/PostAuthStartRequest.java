package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAuthStartRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostAuthStartRequestBody request;
    public PostAuthStartRequest withRequest(PostAuthStartRequestBody request) {
        this.request = request;
        return this;
    }
}