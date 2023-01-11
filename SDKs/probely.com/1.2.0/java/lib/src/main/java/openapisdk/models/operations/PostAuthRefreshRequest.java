package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAuthRefreshRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostAuthRefreshRequestBody request;
    public PostAuthRefreshRequest withRequest(PostAuthRefreshRequestBody request) {
        this.request = request;
        return this;
    }
}