package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostClientRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostClientRequestBody request;
    public PostClientRequest withRequest(PostClientRequestBody request) {
        this.request = request;
        return this;
    }
}