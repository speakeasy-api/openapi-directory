package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssetsReturnsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostAssetsReturnsRequestBody request;
    public PostAssetsReturnsRequest withRequest(PostAssetsReturnsRequestBody request) {
        this.request = request;
        return this;
    }
}