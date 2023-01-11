package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAuthVerifyRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostAuthVerifyRequestBody request;
    public PostAuthVerifyRequest withRequest(PostAuthVerifyRequestBody request) {
        this.request = request;
        return this;
    }
}