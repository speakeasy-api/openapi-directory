package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCheckRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostCheckRequestBody request;
    public PostCheckRequest withRequest(PostCheckRequestBody request) {
        this.request = request;
        return this;
    }
}