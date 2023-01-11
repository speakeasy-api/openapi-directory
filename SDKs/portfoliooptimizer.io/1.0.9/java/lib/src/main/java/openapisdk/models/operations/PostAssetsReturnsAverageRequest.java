package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssetsReturnsAverageRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostAssetsReturnsAverageRequestBody request;
    public PostAssetsReturnsAverageRequest withRequest(PostAssetsReturnsAverageRequestBody request) {
        this.request = request;
        return this;
    }
}