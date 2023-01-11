package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAuthPollRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostAuthPollRequestBody request;
    public PostAuthPollRequest withRequest(PostAuthPollRequestBody request) {
        this.request = request;
        return this;
    }
}