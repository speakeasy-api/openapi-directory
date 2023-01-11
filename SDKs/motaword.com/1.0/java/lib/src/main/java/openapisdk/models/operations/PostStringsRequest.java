package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStringsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostStringsRequestBody request;
    public PostStringsRequest withRequest(PostStringsRequestBody request) {
        this.request = request;
        return this;
    }
}